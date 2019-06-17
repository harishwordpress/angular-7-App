import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('https://my-json-server.typicode.com/harishwordpress/jsondata/people');
    }

    getById(id: number) {
        return this.http.get(`https://my-json-server.typicode.com/harishwordpress/jsondata/people/${id}`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: User,id: number) {
        return this.http.put(`https://my-json-server.typicode.com/harishwordpress/jsondata/people/${id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`https://my-json-server.typicode.com/harishwordpress/jsondata/people/${id}`);
    }
}