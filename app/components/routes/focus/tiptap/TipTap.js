'use client';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import {
  EditorContent,
  EditorProvider,
  useCurrentEditor,
  useEditor,
} from '@tiptap/react';
import { Extension } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { Paragraph } from '@tiptap/extension-paragraph';
import Link from '@tiptap/extension-link';

import React, { useEffect, useState } from 'react';
import { Plugin } from 'prosemirror-state';
import './TipTap.css';

const CustomEnterKeyHandler = Extension.create({
  name: 'customEnterKey',

  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.setHardBreak(),
    };
  },
});

const CustomParagraph = Paragraph.configure({
  HTMLAttributes: {
    class: 'min-h-[40px]',
  },
});

const PasteHandler = Extension.create({
  name: 'pasteHandler',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handlePaste: (view, event, slice) => {
            const clipboardData = event.clipboardData || window.clipboardData;
            const pastedText = clipboardData.getData('text/plain');

            if (pastedText) {
              const modifiedText = pastedText
                .split('\n\n')
                .map(
                  (paragraph) => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`
                )
                .join('');

              // Insert modified HTML content
              this.editor.commands.setContent(modifiedText, { html: true });
              return true;
            }

            return false;
          },
        },
      }),
    ];
  },
});

const MenuBar = ({ editor }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkURL, setLinkURL] = useState('');

  const handleLinkModalOpen = () => {
    setShowLinkModal(true);
  };

  const handleLinkModalClose = () => {
    setShowLinkModal(false);
    setLinkURL('');
  };

  const handleLinkSubmit = () => {
    if (linkURL.trim()) {
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: linkURL })
        .run();
    }
    handleLinkModalClose();
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        type='button'
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`button-tiptap ${
          editor.isActive('paragraph') ? 'is-active' : ''
        }`}
      >
        p
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`button-tiptap ${
          editor.isActive('bold') ? 'is-active' : ''
        }`}
      >
        b
      </button>

      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`button-tiptap ${
          editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
        }`}
      >
        2
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`button-tiptap ${
          editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
        }`}
      >
        3
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`button-tiptap ${
          editor.isActive('bulletlist') ? 'is-active' : ''
        }`}
      >
        ul
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`button-tiptap ${
          editor.isActive('italic') ? 'is-active' : ''
        }`}
      >
        ol
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={`button-tiptap ${
          editor.isActive('pagebreak') ? 'is-active' : ''
        }`}
      >
        br
      </button>
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`button-tiptap ${
          editor.isActive('blockquote') ? 'is-active' : ''
        }`}
      >
        bq
      </button>
      <button
        type='button'
        onClick={handleLinkModalOpen}
        className={`button-tiptap ${
          editor.isActive('link') ? 'is-active' : ''
        }`}
      >
        l
      </button>

      {/* Link Modal */}
      {showLinkModal && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <h2 className='text-lg font-bold mb-4'>Insert Link</h2>
            <input
              type='text'
              placeholder='Enter link URL'
              value={linkURL}
              onChange={(e) => setLinkURL(e.target.value)}
              className='border border-gray-300 rounded-md p-2 mb-4 w-full'
            />
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={handleLinkModalClose}
                className='mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md'
              >
                Cancel
              </button>
              <button
                type='button'
                onClick={handleLinkSubmit}
                className='px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md'
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Link.configure({
    openOnClick: false, // Prevent opening the link when clicked
  }),
  // CustomEnterKeyHandler,
  // PasteHandler,
  // CustomParagraph,
];

const TipTap = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: extensions,
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  if (!editor) {
    return null; // or a loading spinner, etc.
  }
  return (
    <div className='flex flex-col'>
      <div>
        <MenuBar editor={editor} />{' '}
      </div>
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
export default TipTap;
