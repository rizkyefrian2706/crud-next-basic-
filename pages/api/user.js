import axios from "axios";

class User {
  static async getAllData() {
    try {
      const res = await axios.get('http://localhost:3001/user', {
        headers: {
          'accept': 'application/json',
        }
      }) 
      return res.data ? res.data : []
    } catch (err) {
      console.log(err)
      //   setErrorMessage(err)
      return []
    }
  }

  
  static async getOneData(id) {
    try {
      const res = await axios.get('http://localhost:3001/user/' + id, {
        headers: {
          'accept': 'application/json',
        }
      })  
      return res.data ? res.data : []
    } catch (err) {
      console.log(err)
      //   setErrorMessage(err)
      return []
    }
  }


  static async deleteData(id) {
    try {
      const res = await axios.delete('http://localhost:3001/user/' + id, {
        headers: {
          'accept': 'application/json',
        }
      }) 
      return res.data ? res.data.message : []
    } catch (err) {
      console.log(err)
      //   setErrorMessage(err)
      return []
    }
  }

  static async updtData(data) { 
    try {
      const res = await axios.put('http://localhost:3001/user/' + data.id, data, {
        headers: {
          'accept': 'application/json',
        }
      })
      return res.data;
    } catch (err) {
      return err
    }
  }

  static async postData(data) {
    try {
      console.log("data", data);
      const res = await axios.post('http://localhost:3001/user/', data, {
        headers: {
          'accept': 'application/json',
        }
      }) 
      return res.data;
    } catch (err) {
      return err
    }
  }
}
export default User
