import { uploadPhoto, createUser } from "./utils"

function handleProfileSignup()
{
  return Promise.all([createUser(), uploadPhoto()])
    .then((success) => {
      console.log(`${success[1].body} ${success[0].firstName} ${success[0].lastName}`)
    })
    .catch(() => console.log('Signup system offline'))
}
