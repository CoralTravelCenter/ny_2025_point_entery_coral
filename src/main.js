import {notAuth} from "./not-auth/not-auth.js";
import {auth} from "./auth/auth.js";
import {appendOnce} from "./usefuls.js";
import Cookies from 'js-cookie'
import './not-auth/not-auth.scss'
import './auth/auth.scss'
import 'animate.css';

const gamePage = 'https://www.coral.ru/games/new-year/?banner_on_site=main-teaser-ny'
const placeToInsert = document.body
const root = document.createElement('div');
root.classList.add('ny_notauth_colba')

if (Cookies.get('next-auth.session-token')) {
	appendOnce(placeToInsert, auth(root, gamePage));
	console.log('auth')
} else {
	appendOnce(placeToInsert, notAuth(root, gamePage));
	console.log('not-auth')
}