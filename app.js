const profiles = [
  {
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: 'Kulas Light Apt. 556 Gwenborough',
    zipcode: '92998-3874',
    phone: '1-770-736-8031 x56442',
    company: 'Romaguera-Crona',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: 'Victor Plains',
    zipcode: '90566-7771',
    phone: '010-692-6593 x09125',
    company: 'Deckow-Crist',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: 'Douglas Extension',
    zipcode: '59590-4157',
    phone: '1-463-123-4447',
    company: 'Romaguera-Jacobson',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
]
const pi = profileIterator()
nextProfile()
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
function profileIterator() {
  let nextIndex = 0
  return {
    next: function () {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
    },
  }
}
