import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { getAuthUserId } from '@convex-dev/auth/server';

export const addNote = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    categories: v.string(),
    tags: v.string(),
    bgColor: v.string(),
  },

  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error('User not authenticated');
    }

    // Insert a new note
    await ctx.db.insert('allNotes', {
      userId,
      ...args,
    });

    return 'Added to a new note';
  },
});

export const getAllNotes = query({
  args: {
    search: v.optional(v.string()),
    type: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error('User not authenticated');
    }

    const notes = await ctx.db
      .query('allNotes')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .order('desc')
      .collect();

    if (!args.search || args.search.trim() === '' || args.search === 'All') {
      return notes.reverse();
    }

    if (args.search === 'Others') {
      const filtered = notes.filter(
        (note) =>
          note.categories !== 'All' &&
          note.categories !== 'Business' &&
          note.categories !== 'Work' &&
          note.categories !== 'School' &&
          note.categories !== 'General'
      );
      return filtered.reverse();
    }

    if (args.type === 'select') {
      let filtered;

      if (args.search === 'All') {
        filtered = notes.filter((note) => note.categories === 'All');
      } else if (args.search === 'Business') {
        filtered = notes.filter((note) => note.categories === 'Business');
      } else if (args.search === 'Work') {
        filtered = notes.filter((note) => note.categories === 'Work');
      } else if (args.search === 'School') {
        filtered = notes.filter((note) => note.categories === 'School');
      } else if (args.search === 'General') {
        filtered = notes.filter((note) => note.categories === 'General');
      }

      return filtered?.reverse();
    }

    if (args.type === 'search') {
      const search = args.search.toLowerCase();

      const filtered = notes.filter(
        (note) =>
          note.title?.toLowerCase().includes(search) ||
          note.content?.toLowerCase().includes(search) ||
          note.categories?.toLowerCase().includes(search) ||
          note.tags?.toLowerCase().includes(search)
      );

      return filtered.reverse();
    }
  },
});

export const removeNote = mutation({
  args: {
    id: v.id('allNotes'),
  },

  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error('User not authenticated');
    }

    await ctx.db.delete(args.id);
    return 'Note deleted successfully';
  },
});

export const editNote = mutation({
  args: {
    id: v.id('allNotes'),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    categories: v.optional(v.string()),
    tags: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error('User not authenticated');
    }

    const { id, ...updateData } = args;

    const note = await ctx.db.get(id);
    if (!note || note.userId !== userId) {
      throw new Error('Note not found or unauthorized');
    }

    await ctx.db.patch(id, updateData);

    return 'Note updated successfully';
  },
});

export const getFilteredNotes = query({
  args: {
    search: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error('User not authenticated');
    }

    const allNotes = await ctx.db.query('allNotes').collect();

    if (!args.search) return allNotes;

    const searchLower = args.search.toLowerCase();

    const filtered = allNotes.filter(
      (note) =>
        note.title?.toLowerCase().includes(searchLower) ||
        note.content?.toLowerCase().includes(searchLower) ||
        note.categories?.toLowerCase().includes(searchLower) ||
        note.tags?.toLowerCase().includes(searchLower)
    );

    return filtered;
  },
});
