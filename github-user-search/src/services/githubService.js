import axios from "axios";

export async function advancedUserSearch(username, location, minRepos) {
  try {
    let query = "";
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; 
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
}
