import '@mdxeditor/editor/style.css';
import {
  MDXEditor,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  ListsToggle,
  linkPlugin,
  linkDialogPlugin,
  //   CreateLink,
  headingsPlugin,
  quotePlugin,
  listsPlugin,
  thematicBreakPlugin,
  //   BlockTypeSelect,
} from '@mdxeditor/editor';
import { SetStateAction } from 'react';
import { ScrollArea } from '../ui/scroll-area';

const RichTextEditor = ({
  value,
  setNote,
}: {
  value: string;
  setNote: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ScrollArea className='max-h-65'>
      <MDXEditor
        markdown={value}
        onChange={setNote}
        className='border shadow  rounded-md h-65 w-full'
        placeholder='Insert content...'
        contentEditableClassName='prose'
        plugins={[
          linkPlugin(),
          linkDialogPlugin(),
          headingsPlugin({
            allowedHeadingLevels: [1, 2, 3, 4, 5, 6],
          }),
          quotePlugin(),
          listsPlugin(),
          thematicBreakPlugin(),
          toolbarPlugin({
            toolbarClassName: 'editor',
            toolbarContents: () => (
              <div className='flex flex-wrap'>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                {/* <BlockTypeSelect /> */}
                {/* <CreateLink /> */}
              </div>
            ),
          }),
        ]}
      />
    </ScrollArea>
  );
};
export default RichTextEditor;
