//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        /* use foreach to iterate over each subclass element in subclass array */
        data.subclasses.forEach(subclass => {
            console.log(subclass)
            //dynamically creates li for each subclass
            const li = document.createElement("li");
            //inserts subclass name into each new li
            li.textContent = subclass.name
            //inserts new lis into ul in DOM
            document.querySelector("ul").appendChild(li)
        });
        // const subClassItems = document.createElement("li")
        // subClassItems.innerText = `${subclass1}`
        // subClassItems.innerText = `${subclass2}`
        // document.querySelector("ul").appendChild(subClassItems)

        let class1 = data.classes[0].name
        document.querySelector('h3').innerHTML = class1

        let nameOf = data.name
        document.querySelector("h2").innerHTML = nameOf
        // document.querySelector("h4").innerHTML = 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

