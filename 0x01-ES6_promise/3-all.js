import uploadPhoto from "./3-all.js"
import createUser from "./3-all.js"


function handleProfileSignup()
{
  promise.all([createUser(), uploadPhoto()])
    .then((success) => {
      console.log(`${success[1].body} ${success[0].firstName} ${success[0].lastName}`)
    })
    .catch(() => console.log('Signup system offline'))
}
