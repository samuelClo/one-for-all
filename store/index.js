export const state = () => ({
  document: {
    title: ''
  }
})

export const mutations = {
  updateDocument(state, newDocument) {
    state.document = newDocument
  }
}
