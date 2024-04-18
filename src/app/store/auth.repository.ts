import { createStore, withProps, select } from '@ngneat/elf';
import { AuthClient, LoginModelView } from './client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthProps {
  user: { id: string } | null;
  phone: string | null;
}

const authStore = createStore(
  { name: 'auth' },
  withProps<AuthProps>({ user: null, phone: null })
);

@Injectable({ providedIn: 'root' })
export class AuthRepository {

  isLoddined = false;
  user$ = authStore.pipe(select((state) => state.user));
  phone$ = authStore.pipe(select((state) => state.phone));

  constructor(private client: AuthClient, private httpClient: HttpClient) { }

  updateUser(user: AuthProps['user']) {
    authStore.update((state) => ({
      ...state,
      user,
    }));
  }

  updatePhone(phone: AuthProps['phone']) {
    authStore.update((state) => ({
      ...state,
      phone,
    }));
  }




  sendWithSms(phone: string, sms: string) {
    this.client.login(new LoginModelView({ login: phone, sms: sms })).subscribe((res) => {
      console.log(res);
    });
  }
  verifyPhoneNumber(phoneNumber: string) {
    this.client.init(phoneNumber).subscribe((res) => {
      this.updatePhone(phoneNumber);
    });
  }


  isAuth() {
    return this.isLoddined;
  }
}