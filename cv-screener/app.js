//Array of objects which contains information about candidates(Fake Data)
const data = [
  {
    name: "bhupender",
    city: "delhi",
    age: 21,
    language: "python",
    framework: "Django",
    //image link from 'randomuser.me' it's an website which available random data
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "chetan",
    city: "jaipur",
    age: 20,
    language: "java",
    framework: "Django",
    //image link from 'randomuser.me' it's an website which available random data
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "rajan",
    city: "delhi",
    age: 24,
    language: "python",
    framework: "Django",
    //image link from 'randomuser.me' it's an website which available random data
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "ritu",
    city: "jaipur",
    age: 31,
    language: "python",
    framework: "Django",
    //image link from 'randomuser.me' it's an website which available random data
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    name: "mohit",
    city: "delhi",
    age: 29,
    language: "javascript",
    framework: "nodejs",
    //image link from 'randomuser.me' it's an website which available random data
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
];

//cv Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      //using ternary operator
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidates = cvIterator(data);
nextCV();
//button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const CurrentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  image.innerHTML = `<img src='${CurrentCandidate.image}'>`;
  profile.innerHTML = `<ul class="list-group list-group-flush">
  <li class="list-group-item">Name: ${CurrentCandidate.name}</li>
  <li class="list-group-item"> Age: ${CurrentCandidate.age} years old</li>
  <li class="list-group-item">Location: ${CurrentCandidate.city}</li>
  <li class="list-group-item">Language: ${CurrentCandidate.language}</li>
  <li class="list-group-item">Framework: ${CurrentCandidate.framework}</li>
</ul>`
}
