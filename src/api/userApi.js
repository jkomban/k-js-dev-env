import 'whatwg-fetch';
import getBaserUrl from './baseUrl';


/* eslint-disable no-console */
const baseUrl = getBaserUrl();

export function getUsers(){
  console.log("I have reached here in getUsers");
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}


function get(url){
  console.log("my Url"+ baseUrl);
  return fetch(baseUrl + url).then(onSuccess,onError);
}

function del(url){
  const request = new Request(baseUrl+url,{
    method:'DELETE'
  });

  return fetch(request).then(onSuccess,onError);
}


function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error);
}
