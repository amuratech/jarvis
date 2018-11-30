<template>
  <div>
    <div class="fabs">
      <div class="chat" v-bind:class="{ 'is-visible': chatVisibility }" >
        <div class="chat_header">
          <div class="chat_option">
          <div class="header_img">
            <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
            </div>
            <span id="chat_head">HelpDesk</span> <br> <span class="agent" v-if="roomToSubscribeTo">{{ roomToSubscribeTo.name}}</span> <span class="online">(Online)</span>
             <span id="chat_fullscreen_loader" class="chat_fullscreen_loader"><i class="fullscreen zmdi zmdi-window-maximize"></i></span>

          </div>
        </div>
        <div id="chat_fullscreen" class="chat_conversion chat_converse">
          <div v-for='txt in chat' :key="txt.id">
            <span class="chat_msg_item chat_msg_item_admin" v-if="txt.senderId !== '1233NADE'">
                  <div class="chat_avatar">
                    <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
                  </div>{{ txt.text }}</span>
            <span class="chat_msg_item chat_msg_item_user" v-else>
                  {{ txt.text }}</span>
          </div>
          <!-- <div class="status">20m ago</div> -->
        </div>
        <div class="fab_field">
          <!-- <a id="fab_camera" class="fab"><i class="zmdi zmdi-camera"></i></a> -->
          <a id="fab_send" class="fab"><font-awesome-icon icon="paper-plane" /></a>
          <input id="chatSend" name="chat_message"  v-model="textInput" v-on:keyup.enter="sentChat()" placeholder="Send a message" class="chat_field chat_message"/>
        </div>
      </div>
        <a id="prime" v-if="chatVisibility===false" v-on:click='chatVisibility=true' class="fab"><font-awesome-icon style="margin-top: 12px;" icon="comment-alt" size='2x' /></a>
        <a id="prime" v-else v-on:click='chatVisibility=false' class="fab"><font-awesome-icon style="margin-top: 12px;" icon="times" size='2x' /></a>
    </div>
  </div>
</template>
<script>
import { ChatManager, TokenProvider } from '@pusher/chatkit'
import axios from 'axios'

export default {
  name: 'Bot',
  methods: {
    tokenProvider () {
      return new TokenProvider({
        url:'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/62879e3a-1330-490d-8e00-56f289b89046/token'
      })
    },
    createInstance() {
      return new ChatManager({
        instanceLocator: 'v1:us1:62879e3a-1330-490d-8e00-56f289b89046',
        userId: '1233NADE',
        tokenProvider: this.tokenProvider()
      })
    },

    connectChatKit() {
      console.log(this.chatManager)
      this.chatManager.connect().then(user => {
        this.currentUser = user
        this.roomToSubscribeTo = user.rooms[0]
        this.setUse = user
        if (this.roomToSubscribeTo){
          console.log('Going to subscribe to', this.roomToSubscribeTo)
          this.currentUser.subscribeToRoom({
            roomId: this.roomToSubscribeTo.id,
            hooks: {
              onNewMessage: message => {
                this.chat.push(message)
                this.chatVisibility = true
                this.scrollToBottom()
              }
            }
          })
        }
      })
    },

    scrollToBottom() {
      let ps = document.getElementById('chat_fullscreen')
      ps.scrollTo(0,ps.scrollHeight)
    },

    sentChat(){
      this.currentUser.sendMessage({
        text: this.textInput,
        roomId: this.roomToSubscribeTo.id
      })
      .then(messageId => {
        console.log('Success!', messageId)
        this.textInput = ''
      })
      .catch(error => {
        console.log('Error', error)
      })
    }
  },
  async created(){
    this.chatManager = await this.createInstance()
    this.connectChatKit()
  },
  data() {
    return {
      chatVisibility: false,
      chatManager: null,
      currentUser: null,
      roomToSubscribeTo: null,
      textInput: '',
      chat: []
    }
  }
}
</script>
<style scoped src="./../assets/bot.css">
 a:hover {
    color: white !important;
    background-color: #42a5f5 !important;
}
</style>

