import { createBlock, registerBlockType } from "@wordpress/blocks";
import { RichText, InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import { useDispatch } from "@wordpress/data";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

// Styles
import "./style.scss";

// Block name
const className = "skill-section";

const TEMPLATE = [
  [
    "core/group",
    {},
    [
      [
        "core/image",
        {},
      ],
      [
        "core/heading",
        {
          placeholder: __("Skill Name", "goit"),
          level: 5,
        },
      ],
      [
        "core/paragraph",
        {
          placeholder: __("Skill Description", "goit"),
        },
      ],
    ],
  ],
];

const CustomAppender = ({ clientId }) => {
  const { insertBlocks } = useDispatch("core/block-editor");

  const addTemplateBlock = () => {
    const groupBlock = createBlock(
      "core/group",
      {},
      TEMPLATE[0][2].map(([blockName, blockAttributes]) =>
        createBlock(blockName, blockAttributes),
      ),
    );
    insertBlocks([groupBlock], undefined, clientId);
  };

  return (
    <Button variant="secondary" onClick={addTemplateBlock}>
      {__("Add Template Blocks", "goit")}
    </Button>
  );
};
// Register block
registerBlockType(`goit/${className}`, {
  apiVersion: 3,
  title: __("Skill Section", "goit"),
  category: "goit",
  icon: "welcome-write-blog",
  attributes: {
    heading: {
      type: "string",
      source: "html",
      selector: "h3",
    },
    description: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },

  // Edit function
  edit: ({ clientId, attributes, setAttributes }) => {
    const { heading, description } = attributes;
    const blockProps = useBlockProps({ className });

    return (
      <div {...blockProps}>
        <RichText
          tagName="h3"
          placeholder={__("Your text here...", "goit")}
          value={heading}
          onChange={(value) => setAttributes({ heading: value })}
          className={`${className}__title`}
        />
        <RichText
          tagName="p"
          placeholder={__("I will help you with finding a solution...", "goit")}
          value={description}
          onChange={(value) => setAttributes({ description: value })}
          className={`${className}__description`}
        />

        <div className={`${className}__skills`}>
          <InnerBlocks
            templateLock={false}
            renderAppender={() => <CustomAppender clientId={clientId} />}
          />
        </div>
      </div>
    );
  },

  // Save function
  save: ({ attributes }) => {
    const { heading, description } = attributes;
    const blockProps = useBlockProps.save({
      className: `${className}__block container`,
    });

    return (
      <div {...blockProps}>
        <RichText.Content
          tagName="h3"
          value={heading}
          className={`${className}__title`}
        />
        <RichText.Content
          tagName="p"
          value={description}
          className={`${className}__description`}
        />
        <div className={`${className}__skills`}>
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },

  // Deprecated apiVersion 1 entry: keeps the old, bare <div> save() around
  // so posts saved before the apiVersion 3 / useBlockProps migration still
  // pass block validation instead of showing "invalid content".
  deprecated: [
    {
      apiVersion: 1,
      attributes: {
        heading: {
          type: "string",
          source: "html",
          selector: "h3",
        },
        description: {
          type: "string",
          source: "html",
          selector: "p",
        },
      },
      save: ({ attributes }) => {
        const { heading, description } = attributes;

        return (
          <div className={`${className}__block container`}>
            <RichText.Content
              tagName="h3"
              value={heading}
              className={`${className}__title`}
            />
            <RichText.Content
              tagName="p"
              value={description}
              className={`${className}__description`}
            />
            <div className={`${className}__skills`}>
              <InnerBlocks.Content />
            </div>
          </div>
        );
      },
    },
  ],
});
