<template>
  <div id="editor">
<textarea v-model="input" debounce="300">
## Introduce myself
### My name is Trung.
I'm *friendly*, **funny** and ~~fucking~~ _**handsome**_.

I like:

- Learning new things.
- Making new friends.
- Playing the guitar and the piano.

---

> "Find your passion and find a way to get paid for it." - someone said

</textarea>
    <div v-html="input | marked"></div>
  </div>

</template>
