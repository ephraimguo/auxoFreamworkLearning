export const state = ()=> { topics: []};

export const mutations = {
  create(state, topic){
    state.topics.push(topic);
  },
  init(state, topics){
    state.topics = topics;
  }
}