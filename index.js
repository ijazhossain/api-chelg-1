const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};
const users = person.result;
// console.log(users);
const usersContainer = document.getElementById('users-container');
// console.log(usersContainer);
users.forEach(user => {
    console.log(user);
    const userDiv = document.createElement('div');
    userDiv.classList.add('col');
    userDiv.innerHTML = `
                        <div class="card">
                        <h5 class="card-header">Person Name: ${user.name.common}</h5>
                        <div class="card-body">
                            <p class="card-text">Age: ${user.age}</p>
                            <p class="card-text">Street: ${user.address.street}</p>
                           
                        </div>
                    </div>
                  `;

    usersContainer.appendChild(userDiv);
})
