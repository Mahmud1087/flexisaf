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
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error('User not authenticated');
    }

    const notes = await ctx.db
      .query('allNotes')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .order('desc')
      .collect();

    return notes.reverse();
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
