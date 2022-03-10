'use strict';

/**
 * A set of functions called "actions" for `venus`
 */



module.exports = {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }


  getQuestions: async (ctx) => {
    let child_id = ctx.query.child
    let {category} = ctx.query
    console.log(category)
    let child = await getChildDB(child_id)
    let questions = []
    if(category !== 'undefined')
      questions = await getQuestionsDB(child.age, category, 20)
    else{
      questions = [
        ...await getQuestionsDB(child.age, 'A', 5),
        ...await getQuestionsDB(child.age, 'B', 5),
        ...await getQuestionsDB(child.age, 'C', 5),
        ...await getQuestionsDB(child.age, 'D', 5),
      ]

    }
    return questions
    // return {child: child}
  },

  childStepPhychology: async (ctx) => {
    let {step} = ctx.request.body.data
    Object.keys(ctx.request.body.data).map(a => {
      if(/^a\-\d+$/.test(a)){
        let id = a.split('-')[1]
          // console.log(a)
          // console.log({
          //   question: id,
          //   point: ctx.request.body.data[a],
          //   step,
          // })
        strapi.db.query('api::step-psychologie.step-psychologie').create({
          data:{
          question: parseInt(id),
          point: ctx.request.body.data[a],
          step,}
        })
        .catch(console.log)
      }
    })
    return {success: true}
  }

};



const getChildDB = (child) => {
  // let child = req.query
  return strapi.db.query('api::child.child').findOne({
    where: {
      ID:child,
    },
  });
}

const getQuestionsDB = (age, category, limit) => {
  let where = {
    category,
    greater_than_six: (age > 6) ? true : false
  }
  return strapi.db.query('api::psychologie-question.psychologie-question').findMany({
    where,
    limit
  });
}

// [
//   'id question': 'point'
// ]