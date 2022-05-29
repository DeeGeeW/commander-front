import { Component } from '@angular/core';
import axios from 'axios';

type Card = {
   deck_id: number;
   card_img: string;
   is_active: boolean;
   is_hand: boolean;
   is_stack: boolean;
   is_battlefield: boolean;
   is_graveyard: boolean;
   is_exile: boolean;
   tapped: boolean;
   deck_num: number;
   counters: string;
   is_land: boolean;
   is_creature: boolean;
   hand_id: number;
   stack_id: number;
   battlefeild_id: number;
   graveyard_id: number;
   exile_id: number;

}

type GetCardsResponse = {
  data: Card[];
};

async function getCards() {
  try {
    // 👇️ const data: GetCardsResponse
    const { data, status } = await axios.get<GetCardsResponse>(
      'http://localhost:3000/cards',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

getCards();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commander';
}
