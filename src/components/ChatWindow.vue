<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="chatDocs" class="messages" ref="messages">
      <div
        v-for="chatDoc in formattedChats"
        :key="chatDoc"
        class="single"
        v-bind:class="chatDoc.name === user.displayName ? 'own-chat' : ''"
      >
        <span class="created-at">{{ chatDoc.createdAt }}</span>
        <span class="name">{{ chatDoc.name }} </span>
        <span class="message">{{ chatDoc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'
import getCollection from '../composables/getCollection'
import { computed, onUpdated, ref } from 'vue'
import getUser from '../composables/getUser'
export default {
  setup () {
    const { chatDocs, error } = getCollection('messages')
    const { user } = getUser()

    const formattedChats = computed(() => {
      if (chatDocs.value) {
        return chatDocs.value.map(chatDoc => {
          const time = formatDistanceToNow(chatDoc.createdAt.toDate())
          return {
            ...chatDoc,
            createdAt: time,
          }
        })
      }
    })

    // auto scroll to bottom of messages
    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { error, chatDocs, formattedChats, messages, user }
  }
}
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
.own-chat {
  text-align: right;
  color: #36a792;
}
</style>
