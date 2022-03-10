module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/venus/question',
     handler: 'venus.getQuestions',
     config: {
      //  prefix: 'venus',
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/venus/childStepPhychology',
      handler: 'venus.childStepPhychology',
      config: {
       //  prefix: 'venus',
        policies: [],
        middlewares: [],
      },
     },
  ],
};
