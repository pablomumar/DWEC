import { Injectable } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Injectable()
export class DataInputService {
  constructor(private header: HeaderComponent) {
  }

  InfoInputService(){
    return this.header.darInfoInput()
  }

}
