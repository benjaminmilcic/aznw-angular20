import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { exhaustMap, lastValueFrom, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-main.component.html',
  styleUrl: './auth-main.component.css',
})
export class AuthMainComponent implements OnInit {
  vicevi: any;
  src;
  ctx = new AudioContext();
  audio;

  @ViewChild('audiElement') audioElement:HTMLAudioElement;

  constructor(private authService: AuthService, private http: HttpClient) {}
  async ngOnInit() {
    this.vicevi = await lastValueFrom(
      this.http.get(
        'https://aznw-1753b-default-rtdb.europe-west1.firebasedatabase.app/vicevi.json'
      )
    );

    let text = (<string>this.vicevi[0].deutsch).replaceAll('\n', '');
    text = text.replaceAll('\r', '');
    text = text.replaceAll('"', '');

    console.log(text);

    const options = {
      method: 'POST',
      headers: {
        'xi-api-key': '02a129c7ef07d2d6862e13fdcdc32853',
        'Content-Type': 'application/json',
      },
      body:
        '{"model_id":"eleven_multilingual_v2","text":"' +
        text +
        '","voice_settings":{"similarity_boost":0.5,"stability":0.5}}',
    };
    // let test = await lastValueFrom(this.http.post(
    //   'https://api.elevenlabs.io/v1/text-to-speech/VR6AewLTigWG4xSOukaG',
    //   options
    // ))

    await fetch(
      'https://api.elevenlabs.io/v1/text-to-speech/VR6AewLTigWG4xSOukaG',
      options
    )
      .then((data) => data.arrayBuffer())
      .then((arrayBuffer) => this.ctx.decodeAudioData(arrayBuffer))
      .then((decodedAudio) => {

        const source = this.ctx.createBufferSource();
        source.buffer = decodedAudio;
        source.playbackRate.value = 0.1;
        source.loop = true;
        source.start(0);
        const streamNode = this.ctx.createMediaStreamDestination();
        source.connect(streamNode);
        const audioElem = new Audio();
        audioElem.controls = true;
        document.body.appendChild(audioElem);
        audioElem.srcObject = streamNode.stream;






        // this.audio = decodedAudio;
        // window.addEventListener('mousedown', () => {
        //   this.playback(this.audio);
        // });
      });
  }

  playback(audio) {
    const playSound = this.ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(this.ctx.destination);
    playSound.start(this.ctx.currentTime);
  }
}
