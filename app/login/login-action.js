"use server"
import { cookies } from 'next/headers'
export async function loginIn(data) {
    const oUsername = process.env.ADMIN_USERNAME
    const oPassword = process.env.ADMINPASSWORD
    if (data.username === oUsername && data.password === oPassword) {
        cookies().set('att', 'ffnjenvjfnvjenvjk', { secure: true })
        cookies().set('password', data.password, { secure: true })
        cookies().set('username', data.username, { secure: true })
        return ("shi hai")
    }
    else {
        return ("galat hai")
    }
}

export async function logout() {
    try {

        cookies().delete('password')
        cookies().delete('username')
        cookies().delete('att')
        console.log("done logout")
        return { 'message': 'success' }
    } catch (error) {
        return { 'message': error }
    }

}