import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import conf from '../conf/config'
import {Controller} from 'react-hook-form'
// know more about Controller from react-hook-form

function RTE({name, control, label, defaultValue=""}) {
  return (
    // <Editor
    // initialValue =  'default value'
    // init = {
    //     {
    //     branding: false,
    //     height: 500,
    //     menubar:true,
    //     plugin: [
    //         'advlist autolink lists link image charmap print preview anchor',
    //         'searchreplace visualblocks code fullscreen',
    //         'insertdatetime media table paste code help wordcount'
    //     ], 
    //     toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
    //     }
    // }
    // />
    // Easy KAam kyoki Editor ko as a component use krenge

    // therefore we have Controller from react-hook-form




    <div className='w-full' >
      {/* Below is a conditional rendering technique often used to conditionally render JSX based on the truthiness of the label variable. */}
     {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name ||"content"}
        control={control} //ye control parent elem dega ki jitne wvent horha vo le paye control 
        render = {({field: {onChange}}) => (
          // <Editor
          //   apiKey= {conf.tinyMeAPIKey}
          //   onInit={(_evt, editor) => editorRef.current = editor}
          //   initialValue =  {defaultValue}
          //   init = {{
          //       initialValue: defaultValue,
          //       height: 500,
          //       menubar:true,
          //       ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
          //       plugins: [
          //         "image",
          //         "advlist",
          //         "autolink",
          //         "lists",
          //         "link",
          //         "image",
          //         "charmap",
          //         "preview",
          //         "anchor",
          //         "searchreplace",
          //         "visualblocks",
          //         "code",
          //         "fullscreen",
          //         "insertdatetime",
          //         "media",
          //         "table",
          //         "code",
          //         "help",
          //         "wordcount",
          //         "anchor",
          //     ],
          //     toolbar:
          //     "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
          //     content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
          //   }}
          //   onEditorChange = {onChange}
          // />
          <Editor
      apiKey= {conf.tinyMeAPIKey}
      init={{
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      initialValue={defaultValue}
      onEditorChange = {onChange}
    />
        )}
      />

    </div>
  )
}

export default RTE

// From 6:40:00