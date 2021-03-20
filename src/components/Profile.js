import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../actions/Actions';
import axios from 'axios';




const Profile = ({getFullUser, userinfo, token}) => {


    const user = userinfo
    const TOKEN =  localStorage.getItem('token');

    console.log('tokeeeeeeeeeeeeen', TOKEN);
    useEffect(()=>{
        console.log('tokeeeeeeeeeeeeen in useeffect', TOKEN);
        get().then(user => {
            console.log('getfulluser', user);
            getFullUser(user);
          });
    }, [])

    const get = async () => {
        console.log('tokeeeeen in get', TOKEN)
        const user = await axios.get('http://localhost:3001/user/profile', {
            headers: { Authorization: 'Bearer ' + TOKEN } 
        }).then((res) => {
          return res.data;
        }).catch((err) => {
          console.error('errrro occured', err);
          return null;
        });
        return user;
      }
    
    return (
       <div>
           <h2>{user ? user.name : null}</h2>
       </div>
    );
}
const mapStateToProps = (state) => {
    return { userinfo: state.user, token: state.token}
}
const mapDispatchToProps = (dispatch) => {
    return {
        getFullUser: userobject => dispatch(setCurrentUser(userobject))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);