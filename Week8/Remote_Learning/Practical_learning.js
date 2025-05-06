function fetchUserData(userId) {
return fetch(`https://api.example.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
    updateUserInfo(data);
    return data;
    });
}

function updateUserInfo(userData) {
const userInfoElement = document.getElementById('user-info');
userInfoElement.innerHTML = `
    <h2>${userData.name}</h2>
    <p>Email: ${userData.email}</p>
    <p>Location: ${userData.location}</p>
`;
}

fetchUserData(123);