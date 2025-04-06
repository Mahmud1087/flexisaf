import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';
import { v } from 'convex/values';

const schema = defineSchema({
  ...authTables,
  allNotes: defineTable({
    userId: v.id('users'),
    title: v.string(),
    content: v.string(),
    categories: v.string(),
    tags: v.string(),
    bgColor: v.string(),
  })
    .index('by_user', ['userId'])
    .index('by_user_title', ['userId', 'title'])
    .index('by_user_content', ['userId', 'content'])
    .index('by_user_category', ['userId', 'categories'])
    .index('by_user_tags', ['userId', 'tags']),
  // trash: defineTable({
  //   userId: v.id('users'),
  //   title: v.string(),
  //   content: v.string(),
  //   categories: v.string(),
  //   tags: v.string(),
  //   bgColor: v.string(),
  // })
  //   .index('by_user', ['userId'])
  //   .index('by_user_title', ['userId', 'title'])
  //   .index('by_user_content', ['userId', 'content'])
  //   .index('by_user_category', ['userId', 'categories'])
  //   .index('by_user_tags', ['userId', 'tags']),
});

export default schema;
