async function getUserData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  const profiles = []
  users.forEach((user) => {
    const address = user.address
    profiles.push({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: address.street + ' ' + address.suite + ' ' + address.city,
      zipcode: address.zipcode,
      phone: user.phone,
      company: user.company.name,
      image: `https://randomuser.me/api/portraits/men/${user.id}.jpg`,
    })
  })
  return profiles
}
let pi
getUserData().then((resp) => {
  pi = profileIterator(resp)
  nextProfile()
})

document.getElementById('next').addEventListener('click', nextProfile)
function nextProfile() {
  const currentProfile = pi.next().value
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Username: ${currentProfile.username}</li>
      <li class="list-group-item">Email: ${currentProfile.email}</li>
      <li class="list-group-item">Address: ${currentProfile.address}</li>
      <li class="list-group-item">Zipcode: ${currentProfile.zipcode}</li>
      <li class="list-group-item">Phone: ${currentProfile.phone}</li>
      <li class="list-group-item">Company: ${currentProfile.company}</li>
    </ul>
  `
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}" alt="profilePicture" width="200"/>
  `
  } else {
    location.reload()
  }
}
function profileIterator(profiles) {
  let nextIndex = 0
  return {
    next: function () {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
    },
  }
}
