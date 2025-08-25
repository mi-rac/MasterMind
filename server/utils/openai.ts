// // import latest openai api, agents, completions, conversations whatever is latest
// import { Configuration, OpenAIApi } from 'openai'

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY
// })

// const openai = new OpenAIApi(configuration)

// export async function getChatResponse(messages: any[]) {
//   try {
//     const response = await openai.createChatCompletion({
//       model: 'gpt-4',
//       messages: messages
//     })
//     return response.data.choices[0].message
//   } catch (error) {
//     console.error(error)
//     throw error
//   }
// }