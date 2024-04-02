import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Joke } from '../auth.model';
import { IonCheckbox } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, IonCheckbox, FormsModule],
  templateUrl: './auth-main.component.html',
  styleUrl: './auth-main.component.css',
})
export class AuthMainComponent implements OnInit {
  jokes: Joke[];
  jokeIndex = 0;
  english = true;
  german = true;
  croatian = true;

  constructor(private http: HttpClient, private authService:AuthService) {}
  async ngOnInit() {
    this.jokes = await lastValueFrom(
      this.http.get<Joke[]>(
        'https://aznw-1753b-default-rtdb.europe-west1.firebasedatabase.app/vicevi.json'
      )
    );
  }

  onLogout() {
    this.authService.logout();
  }

  previousJoke() {
    this.jokeIndex =
      this.jokeIndex < 1 ? this.jokes.length - 1 : this.jokeIndex - 1;
  }

  nextJoke() {
    this.jokeIndex =
      this.jokeIndex > this.jokes.length - 2 ? 0 : this.jokeIndex + 1;
  }
}

// const playLanguage = this.otherLanguage === 'german' ? 'de-de' : 'hr-hr';

//     this.playAudio.src =
//       'https://api.voicerss.org/?key=5cde9db8cff64cc2b675b76dfcadb68f&r=-3&hl=' +
//       playLanguage +
//       '&src=' +
//       this.wordToPractice[this.otherLanguage];

//     this.playAudio.play();

// ctx = new AudioContext();
// audio;

// async ngOnInit() {

// let text = (<string>this.vicevi[0].deutsch).replaceAll('\n', '');
//     text = text.replaceAll('\r', '');
//     text = text.replaceAll('"', '');

//     console.log(text);

//     const options = {
//       method: 'POST',
//       headers: {
//         'xi-api-key': '02a129c7ef07d2d6862e13fdcdc32853',
//         'Content-Type': 'application/json',
//       },
//       body:
//         '{"model_id":"eleven_multilingual_v2","text":"' +
//         text +
//         '","voice_settings":{"similarity_boost":0.5,"stability":0.5}}',
//     };

//     await fetch(
//       'https://api.elevenlabs.io/v1/text-to-speech/VR6AewLTigWG4xSOukaG',
//       options
//     )
//       .then((data) => data.arrayBuffer())
//       .then((arrayBuffer) => this.ctx.decodeAudioData(arrayBuffer))
//       .then((decodedAudio) => {

//         const source = this.ctx.createBufferSource();
//         source.buffer = decodedAudio;
//         source.playbackRate.value = 0.1;
//         source.loop = true;
//         source.start(0);
//         const streamNode = this.ctx.createMediaStreamDestination();
//         source.connect(streamNode);
//         const audioElem = new Audio();
//         audioElem.controls = true;
//         document.body.appendChild(audioElem);
//         audioElem.srcObject = streamNode.stream;

//         // this.audio = decodedAudio;
//         // window.addEventListener('mousedown', () => {
//         //   this.playback(this.audio);
//         // });
//       });
//  }

// playback(audio) {
//     const playSound = this.ctx.createBufferSource();
//     playSound.buffer = audio;
//     playSound.connect(this.ctx.destination);
//     playSound.start(this.ctx.currentTime);
//   }

//  this.playAudio.src =
//    'https://api.voicerss.org/?key=5cde9db8cff64cc2b675b76dfcadb68f&r=-3&hl=' +
//    'de-de' +
//    '&src=' +
//    'Hallo, guten abend!';
