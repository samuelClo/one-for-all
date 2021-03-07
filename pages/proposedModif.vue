<template>
  <div class="w-screen h-screen bg-gray-100 relative">
    <div class="w-screen h-screen flex items-center justify-center">
      <div class="overflow-scroll bg-white shadow-lg p-10 w-1/2 h-full">
        <h1 class="text-2xl">{{ document.title }}</h1>
        <client-only>
          <editor ref="editor" :config="config" autofocus :initialized="onInitialized"/>
        </client-only>
      </div>
    </div>

    <div class="bg-green-400 rounded px-6 py-2 text-white absolute-center flex items-center justify-center cursor-pointer font-medium uppercase hover:bg-green-600 transition-all duration-100 ease-in">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" stroke="#fff" width="20px" height="20px" fill="#fff" xml:space="preserve">
<g>
	<g>
		<path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
	</g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
        <g>
</g>
</svg>
      <span class="ml-4">Add</span>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import Button from "../components/Button.vue";
import axios from 'axios'

let Header, List, CodeTool, Paragraph, Embed, Table, Checklist, Marker, Warning, RawTool, Quote, InlineCode, Delimiter, SimpleImage, ImageTool
if (process.client)
{
  Header = require('@editorjs/header')
  List = require('@editorjs/list')
  CodeTool = require('@editorjs/code')
  Paragraph = require('@editorjs/paragraph')
  Embed = require('@editorjs/embed')
  Table = require('@editorjs/table')
  Checklist = require('@editorjs/checklist')
  Marker = require('@editorjs/marker')
  Warning = require('@editorjs/warning')
  RawTool = require('@editorjs/raw')
  Quote = require('@editorjs/quote')
  InlineCode = require('@editorjs/inline-code')
  Delimiter = require('@editorjs/delimiter')
  SimpleImage = require('@editorjs/simple-image')
  ImageTool = require('@editorjs/image')
}

export default {
  data() {
    return {
      formData: {
        content: ''
      },
      config: {
        tools:{
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4],
              defaultLevel: 3,
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool
          },
          paragraph: {
            class: Paragraph,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true
              }
            }
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          checklist: {
            class: Checklist,
          },
          Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
          },
          warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
              titlePlaceholder: 'Title',
              messagePlaceholder: 'Message',
            },
          },
          raw: RawTool,
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author',
            },
          },
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
          },
          delimiter: Delimiter,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: 'http://localhost:8080/images', // Your backend file uploader endpoint
                // byUrl: 'http://localhost:8080/images', // Your endpoint that provides uploading by Url
              },
              additionalRequestHeaders: {
                'Access-Control-Allow-Origin':'*',
              },
              field: 'image',
              types: 'image/*',
              uploader: {
                async uploadByFile(file) {
                  console.log(file)
                  try {
                    const result = await fetch('http://localhost:8080/images', {
                      method: 'POST',
                      headers: new Headers(),
                      mode: 'cors',
                      cache: 'default',
                      body: JSON.stringify({
                        file
                      })
                    })
                    console.log(result)
                  } catch (err) {
                    console.log(err)
                  }
                }
              },
            }
          },
        },
        onReady: () => {
          console.log('on ready')
        },
        onChange: (args) => {
          console.log('Now I know that Editor\'s content changed!')
        },
        data: {
          "time": 1591362820044,
          "blocks": [
            {
              "type" : "header",
              "data" : {
                "text" : "Editor.js",
                "level" : 2
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
            },
            {
              "type" : "header",
              "data" : {
                "text" : "Key features",
                "level" : 3
              }
            },
            {
              "type" : "list",
              "data" : {
                "style" : "unordered",
                "items" : [
                  "It is a block-styled editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a simple API"
                ]
              }
            },
            {
              "type" : "header",
              "data" : {
                "text" : "What does it mean «block-styled editor»",
                "level" : 3
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
              }
            },
            {
              "type" : "header",
              "data" : {
                "text" : "What does it mean clean data output",
                "level" : 3
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Clean data is useful to sanitize, validate and process on the backend."
              }
            },
            {
              "type" : "delimiter",
              "data" : {}
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
              }
            },
            {
              "type" : "image",
              "data" : {
                "file" : {
                  "url" : "https://picsum.photos/200/300"
                },
                "caption" : "",
                "withBorder" : false,
                "stretched" : false,
                "withBackground" : false
              }
            },
          ],
          "version" : "2.18.0"
        },

      }
    }
  },
  computed: {
    document () {
      return this.$store.state.document
    },
    contentParsed() {
      return marked(this.formData.content)
    }
  },
  mounted() {
    this.content = '# ${document.title'
  },
  components: {
    Button
  },
  methods: {
    async uploadImage() {
      try {
        const result = await axios.$post('http://localhost:8080/images', {
          file: file
        })
      } catch (err) {
        console.log(err)
      }
    },
    onInitialized (editor) {
      console.log(editor)
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.codex-editor__redactor {
  padding-bottom: 0!important;
  margin-right: 0!important;
}
.absolute-center {
  position: absolute;
  bottom: 24px;
  right: 24px;
}
</style>
