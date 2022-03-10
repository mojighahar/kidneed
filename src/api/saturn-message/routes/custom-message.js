module.exports = {
    routes: [
      {
        method: "GET",
        path: "/saturn-messages/child/:childId",
        handler: "saturn-message.childMessages",
      },
      {
        method: "GET",
        path: "/saturn-messages/child/:childId/count",
        handler: "saturn-message.childMessagesCount",
      },
    ]
};