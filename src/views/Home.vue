<template>
  <div class="home-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span class="logo-icon">🐱</span>
        <span class="logo-text">Nangnoy</span>
      </div>
      <nav class="sidebar-nav">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="nav-item"
          :class="{ active: activeNav === item.label }"
          @click="activeNav = item.label"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
        </div>
      </nav>
      <div class="sidebar-footer">
        <div class="user-info">
          <span class="user-avatar">👨‍💻</span>
          <div>
            <div class="user-name">Father</div>
            <div class="user-role">Admin · Online</div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Greeting Section -->
      <section class="greeting-section">
        <div class="greeting-text">
          <h1 class="greeting-title">
            What can I help you with today, <span class="greeting-name">Father</span>? 🧡
          </h1>
          <p class="greeting-subtitle">System Online · Learning Protocol Active · 60+ Skills Loaded</p>
        </div>
        <div class="greeting-badges">
          <Tag color="success">Gemini Active</Tag>
          <Tag color="warning">OpenAI Standby</Tag>
          <Tag color="blue">Claude Ready</Tag>
        </div>
      </section>

      <!-- Ask Anything Input Section -->
      <section class="input-section">
        <div class="input-wrapper">
          <div class="input-container">
            <Input
              v-model="question"
              type="textarea"
              placeholder="Ask anything... (e.g. สร้าง Flutter UI ให้หน่อย, สรุป log นี้ให้หน่อย)"
              :rows="3"
              class="ask-input"
            />
            <div class="input-toolbar">
              <div class="input-tools">
                <Tooltip content="New Conversation" placement="top">
                  <Button shape="circle" ghost class="tool-btn" @click="clearQuestion">
                    <Icon type="md-refresh" />
                  </Button>
                </Tooltip>
                <Tooltip content="Upload File" placement="top">
                  <Button shape="circle" ghost class="tool-btn">
                    <Icon type="md-attach" />
                  </Button>
                </Tooltip>
                <Tooltip content="Screenshot" placement="top">
                  <Button shape="circle" ghost class="tool-btn">
                    <Icon type="md-camera" />
                  </Button>
                </Tooltip>
                <Dropdown trigger="click" @on-click="selectModel">
                  <Button ghost class="model-btn">
                    <Icon type="md-flash" />
                    {{ selectedModel }}
                    <Icon type="ios-arrow-down" />
                  </Button>
                  <template #list>
                    <DropdownMenu>
                      <DropdownItem name="Gemini Pro">⚡ Gemini Pro (Smart)</DropdownItem>
                      <DropdownItem name="GPT-4o">🧠 GPT-4o (Think Deeper)</DropdownItem>
                      <DropdownItem name="Claude Sonnet">🎯 Claude Sonnet (Precise)</DropdownItem>
                    </DropdownMenu>
                  </template>
                </Dropdown>
              </div>
              <Button type="primary" class="ask-submit-btn" @click="submitQuestion">
                <Icon type="md-send" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Action Buttons Section -->
      <section class="actions-section">
        <div class="actions-label">Quick Actions</div>
        <div class="actions-grid">
          <Button
            v-for="action in quickActions"
            :key="action.label"
            class="action-btn"
            :class="`action-btn--${action.color}`"
            @click="handleAction(action)"
          >
            <span class="action-icon">{{ action.icon }}</span>
            <span class="action-label">{{ action.label }}</span>
          </Button>
        </div>
      </section>

      <!-- Feed Section -->
      <section class="feed-section">
        <div class="feed-header">
          <h2 class="feed-title">Activity Feed</h2>
          <div class="feed-filters">
            <Button
              v-for="filter in feedFilters"
              :key="filter"
              size="small"
              :type="activeFilter === filter ? 'primary' : 'default'"
              class="filter-btn"
              ghost
              @click="activeFilter = filter"
            >{{ filter }}</Button>
          </div>
        </div>

        <div class="feed-list">
          <div
            v-for="post in filteredFeed"
            :key="post.id"
            class="feed-card"
          >
            <!-- Alert Banner -->
            <Alert
              v-if="post.alert"
              :type="post.alert.type"
              show-icon
              class="feed-alert"
            >
              <template #desc>{{ post.alert.message }}</template>
              {{ post.alert.title }}
            </Alert>

            <!-- Post Content -->
            <div class="post-header">
              <div class="post-meta">
                <span class="post-type-badge" :class="`badge--${post.type}`">
                  {{ getTypeIcon(post.type) }} {{ post.type }}
                </span>
                <span class="post-time">{{ post.time }}</span>
              </div>
              <div class="post-actions-top">
                <Tag :color="getStatusColor(post.status)" size="small">{{ post.status }}</Tag>
              </div>
            </div>

            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-body">{{ post.body }}</p>

            <!-- Tags -->
            <div v-if="post.tags && post.tags.length" class="post-tags">
              <Tag
                v-for="tag in post.tags"
                :key="tag"
                size="small"
                class="post-tag"
              >{{ tag }}</Tag>
            </div>

            <!-- Post Footer with Emoji Reactions -->
            <div class="post-footer">
              <div class="emoji-reactions">
                <button
                  v-for="reaction in post.reactions"
                  :key="reaction.emoji"
                  class="reaction-btn"
                  :class="{ active: reaction.reacted }"
                  @click="toggleReaction(post.id, reaction.emoji)"
                >
                  {{ reaction.emoji }} <span class="reaction-count">{{ reaction.count }}</span>
                </button>
                <button class="reaction-add-btn" @click="showEmojiPicker(post.id)">
                  <Icon type="md-add" /> 😊
                </button>
              </div>
              <div class="post-action-btns">
                <Button size="small" ghost class="post-action">
                  <Icon type="md-chatbubbles" /> Comment
                </Button>
                <Button size="small" ghost class="post-action">
                  <Icon type="md-share" /> Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      question: '',
      selectedModel: 'Gemini Pro',
      activeNav: 'Home',
      activeFilter: 'All',

      navItems: [
        { icon: '🏠', label: 'Home' },
        { icon: '🧠', label: 'Skills & Knowledge' },
        { icon: '💾', label: 'Agent Memory' },
        { icon: '🚀', label: 'Projects' },
        { icon: '🔧', label: 'Settings' }
      ],

      quickActions: [
        { icon: '💬', label: 'Ask', color: 'primary' },
        { icon: '📁', label: 'All repositories', color: 'secondary' },
        { icon: '✅', label: 'Task', color: 'success' },
        { icon: '🐛', label: 'Create issue', color: 'warning' },
        { icon: '✨', label: 'Spark', color: 'purple' },
        { icon: '🌿', label: 'Git', color: 'git' },
        { icon: '🔀', label: 'Pull requests', color: 'pr' }
      ],

      feedFilters: ['All', 'Incident', 'Task', 'PR', 'Alert'],

      feedPosts: [
        {
          id: 1,
          type: 'Incident',
          title: '🚨 Incident Thread: AI Arsenal Switcher — Gemini Timeout',
          body: 'Gemini API responded with 503 timeout on batch requests. Failover to OpenAI completed successfully. System maintained 99.9% uptime. Investigation ongoing — root cause appears to be GCP regional saturation.',
          time: '2 minutes ago',
          status: 'Investigating',
          tags: ['gemini', 'timeout', 'failover', 'production'],
          alert: {
            type: 'error',
            title: 'Critical Alert: Service Degradation Detected',
            message: 'Gemini Pro endpoint returning 503. OpenAI fallback activated automatically.'
          },
          reactions: [
            { emoji: '👀', count: 5, reacted: false },
            { emoji: '🔥', count: 2, reacted: false },
            { emoji: '✅', count: 1, reacted: true }
          ]
        },
        {
          id: 2,
          type: 'Task',
          title: '🎯 Task: Build Home UI with Vue.js + ViewUI',
          body: 'Create a modern dark-theme Home page with Ask Anything input, quick action buttons, and an activity feed. Use ViewUI Plus components. Inspired by GitHub Copilot dashboard design.',
          time: '1 hour ago',
          status: 'In Progress',
          tags: ['vue', 'viewui', 'frontend', 'ui-ux'],
          alert: null,
          reactions: [
            { emoji: '🚀', count: 8, reacted: true },
            { emoji: '❤️', count: 4, reacted: false },
            { emoji: '👍', count: 3, reacted: false }
          ]
        },
        {
          id: 3,
          type: 'PR',
          title: '🔀 Pull Request: [WIP] Add Home UI layout using Vue.js and ViewUI',
          body: 'Implementing the new Home page UI for Nangnoy Learning Agent. Features dark Modern theme, ViewUI components, Ask Anything input with model selector, Quick Actions, and Activity Feed with emoji reactions.',
          time: '3 hours ago',
          status: 'Open',
          tags: ['WIP', 'vue', 'copilot'],
          alert: {
            type: 'warning',
            title: 'Review Required',
            message: 'PR is ready for review. Please check UI/UX alignment with Jiraphinya design reference.'
          },
          reactions: [
            { emoji: '🎉', count: 3, reacted: false },
            { emoji: '👀', count: 7, reacted: true },
            { emoji: '💡', count: 2, reacted: false }
          ]
        },
        {
          id: 4,
          type: 'Alert',
          title: '📊 System Alert: Knowledge Base Updated',
          body: 'New skill added: Copilot UX/UI Inspiration (Jiraphinya Interface). 60+ skills now fully indexed. Memory snapshot created before IDE migration.',
          time: '1 day ago',
          status: 'Resolved',
          tags: ['knowledge-base', 'skill', 'memory'],
          alert: {
            type: 'success',
            title: 'Knowledge Sync Complete',
            message: 'All 60+ skills successfully loaded into long-term memory. Agent evolution continues.'
          },
          reactions: [
            { emoji: '🧠', count: 12, reacted: true },
            { emoji: '⭐', count: 6, reacted: false },
            { emoji: '🎊', count: 4, reacted: false }
          ]
        }
      ]
    }
  },

  computed: {
    filteredFeed() {
      if (this.activeFilter === 'All') return this.feedPosts
      return this.feedPosts.filter(post => post.type === this.activeFilter)
    }
  },

  methods: {
    submitQuestion() {
      if (!this.question.trim()) return
      this.$Message.info(`Processing: "${this.question}" with ${this.selectedModel}...`)
      this.question = ''
    },

    clearQuestion() {
      this.question = ''
      this.$Message.success('Conversation cleared.')
    },

    selectModel(name) {
      this.selectedModel = name
      this.$Message.success(`Switched to ${name}`)
    },

    handleAction(action) {
      this.$Message.info(`Action: ${action.label}`)
    },

    getTypeIcon(type) {
      const icons = {
        Incident: '🚨',
        Task: '✅',
        PR: '🔀',
        Alert: '📊'
      }
      return icons[type] || '📌'
    },

    getStatusColor(status) {
      const colors = {
        Investigating: 'error',
        'In Progress': 'warning',
        Open: 'primary',
        Resolved: 'success',
        Closed: 'default'
      }
      return colors[status] || 'default'
    },

    toggleReaction(postId, emoji) {
      const post = this.feedPosts.find(p => p.id === postId)
      if (!post) return
      const reaction = post.reactions.find(r => r.emoji === emoji)
      if (!reaction) return
      if (reaction.reacted) {
        reaction.count--
        reaction.reacted = false
      } else {
        reaction.count++
        reaction.reacted = true
      }
    },

    showEmojiPicker(postId) {
      this.$Message.info('Emoji picker coming soon!')
    }
  }
}
</script>

<style scoped>
/* ============================================================
   HOME PAGE — NANGNOY LEARNING AGENT
   Modern Dark Theme inspired by GitHub Copilot Dashboard
   ============================================================ */

/* CSS Variables */
.home-page {
  --bg-primary: #0f0f13;
  --bg-secondary: #121218;
  --bg-card: #1a1a22;
  --bg-card-hover: #1e1e28;
  --bg-input: #12121a;
  --border-color: #2a2a35;
  --border-hover: #444;
  --text-primary: #f0f0f5;
  --text-secondary: #a0a0b0;
  --text-muted: #666680;
  --accent-primary: #FF6D00;
  --accent-secondary: #d946db;
  --accent-blue: #3b82f6;
  --accent-green: #22c55e;
  --accent-purple: #8b5cf6;

  display: flex;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* ============================================================
   SIDEBAR
   ============================================================ */
.sidebar {
  width: 240px;
  min-height: 100vh;
  background-color: var(--bg-secondary);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px 24px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 12px;
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent-primary);
  letter-spacing: -0.3px;
}

.sidebar-nav {
  flex: 1;
  padding: 0 12px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.15s ease;
  margin-bottom: 4px;
  font-size: 14px;
}

.nav-item:hover {
  background-color: rgba(255, 109, 0, 0.08);
  color: var(--text-primary);
}

.nav-item.active {
  background-color: rgba(255, 109, 0, 0.12);
  color: var(--accent-primary);
  font-weight: 600;
}

.nav-icon {
  font-size: 16px;
}

.sidebar-footer {
  padding: 16px 20px;
  border-top: 1px solid var(--border-color);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  font-size: 24px;
  width: 36px;
  height: 36px;
  background: rgba(255, 109, 0, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.user-role {
  font-size: 11px;
  color: var(--accent-green);
}

/* ============================================================
   MAIN CONTENT
   ============================================================ */
.main-content {
  flex: 1;
  padding: 32px 40px;
  max-width: 900px;
  overflow-y: auto;
}

/* ============================================================
   GREETING SECTION
   ============================================================ */
.greeting-section {
  margin-bottom: 28px;
}

.greeting-title {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.greeting-name {
  color: var(--accent-primary);
}

.greeting-subtitle {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.greeting-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* ============================================================
   INPUT SECTION
   ============================================================ */
.input-section {
  margin-bottom: 24px;
}

.input-container {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.input-container:focus-within {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 2px rgba(255, 109, 0, 0.12);
}

.ask-input :deep(.ivu-input) {
  background-color: transparent !important;
  border: none !important;
  color: var(--text-primary) !important;
  font-size: 15px !important;
  padding: 16px !important;
  resize: none;
  outline: none !important;
  box-shadow: none !important;
}

.ask-input :deep(.ivu-input::placeholder) {
  color: var(--text-muted) !important;
}

.input-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-top: 1px solid var(--border-color);
  background-color: rgba(255, 255, 255, 0.02);
}

.input-tools {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tool-btn {
  color: var(--text-secondary) !important;
  border-color: var(--border-color) !important;
  background: transparent !important;
  width: 32px !important;
  height: 32px !important;
}

.tool-btn:hover {
  color: var(--text-primary) !important;
  border-color: var(--border-hover) !important;
}

.model-btn {
  color: var(--text-secondary) !important;
  border-color: var(--border-color) !important;
  background: transparent !important;
  font-size: 12px !important;
  height: 32px !important;
  gap: 4px;
}

.model-btn:hover {
  color: var(--accent-primary) !important;
  border-color: var(--accent-primary) !important;
}

.ask-submit-btn {
  background-color: var(--accent-primary) !important;
  border-color: var(--accent-primary) !important;
  font-weight: 600 !important;
  height: 36px !important;
  padding: 0 20px !important;
  border-radius: 8px !important;
}

.ask-submit-btn:hover {
  background-color: #e55d00 !important;
  border-color: #e55d00 !important;
}

/* ============================================================
   QUICK ACTIONS SECTION
   ============================================================ */
.actions-section {
  margin-bottom: 32px;
}

.actions-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
}

.actions-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.action-btn {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  background-color: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-secondary) !important;
  border-radius: 20px !important;
  padding: 6px 14px !important;
  height: auto !important;
  font-size: 13px !important;
  cursor: pointer;
  transition: all 0.2s ease !important;
}

.action-btn:hover {
  background-color: var(--bg-card-hover) !important;
  border-color: var(--border-hover) !important;
  color: var(--text-primary) !important;
  transform: translateY(-1px);
}

.action-btn--primary:hover {
  border-color: var(--accent-blue) !important;
  color: var(--accent-blue) !important;
}

.action-btn--success:hover {
  border-color: var(--accent-green) !important;
  color: var(--accent-green) !important;
}

.action-btn--warning:hover {
  border-color: #f59e0b !important;
  color: #f59e0b !important;
}

.action-btn--purple:hover {
  border-color: var(--accent-purple) !important;
  color: var(--accent-purple) !important;
}

.action-btn--git:hover,
.action-btn--pr:hover {
  border-color: var(--accent-primary) !important;
  color: var(--accent-primary) !important;
}

.action-icon {
  font-size: 14px;
}

/* ============================================================
   FEED SECTION
   ============================================================ */
.feed-section {
  margin-bottom: 40px;
}

.feed-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 10px;
}

.feed-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.feed-filters {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.filter-btn {
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
  font-size: 12px !important;
  border-radius: 12px !important;
}

.filter-btn:hover {
  border-color: var(--accent-primary) !important;
  color: var(--accent-primary) !important;
}

.feed-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ============================================================
   FEED CARD
   ============================================================ */
.feed-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.2s, transform 0.15s;
}

.feed-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

.feed-alert {
  margin-bottom: 14px;
  border-radius: 8px !important;
}

.feed-alert :deep(.ivu-alert) {
  border-radius: 8px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 8px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.post-type-badge {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 8px;
  border-radius: 10px;
}

.badge--Incident {
  background-color: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.25);
}

.badge--Task {
  background-color: rgba(34, 197, 94, 0.12);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.25);
}

.badge--PR {
  background-color: rgba(139, 92, 246, 0.12);
  color: #8b5cf6;
  border: 1px solid rgba(139, 92, 246, 0.25);
}

.badge--Alert {
  background-color: rgba(59, 130, 246, 0.12);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.post-time {
  font-size: 12px;
  color: var(--text-muted);
}

.post-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
}

.post-body {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.post-tag :deep(.ivu-tag) {
  background-color: rgba(255, 255, 255, 0.05) !important;
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
  border-radius: 6px !important;
  font-size: 11px !important;
}

/* ============================================================
   POST FOOTER — EMOJI REACTIONS
   ============================================================ */
.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 12px;
  border-top: 1px solid var(--border-color);
}

.emoji-reactions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.reaction-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 13px;
  color: var(--text-secondary);
  transition: all 0.15s ease;
  line-height: 1;
}

.reaction-btn:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: var(--border-hover);
  color: var(--text-primary);
  transform: scale(1.05);
}

.reaction-btn.active {
  background-color: rgba(255, 109, 0, 0.12);
  border-color: rgba(255, 109, 0, 0.4);
  color: var(--accent-primary);
}

.reaction-count {
  font-size: 12px;
  font-weight: 600;
}

.reaction-add-btn {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: transparent;
  border: 1px dashed var(--border-color);
  border-radius: 12px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 12px;
  color: var(--text-muted);
  transition: all 0.15s ease;
}

.reaction-add-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.post-action-btns {
  display: flex;
  gap: 8px;
}

.post-action {
  font-size: 12px !important;
  border-color: var(--border-color) !important;
  color: var(--text-secondary) !important;
  background: transparent !important;
  border-radius: 8px !important;
}

.post-action:hover {
  border-color: var(--border-hover) !important;
  color: var(--text-primary) !important;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 768px) {
  .home-page {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    min-height: auto;
    height: auto;
    position: relative;
    padding: 12px 0;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sidebar-logo {
    padding: 8px 16px 8px;
    border-bottom: none;
    margin-bottom: 0;
  }

  .sidebar-nav {
    display: flex;
    gap: 4px;
    padding: 0 12px;
    overflow-x: auto;
  }

  .nav-item {
    white-space: nowrap;
    margin-bottom: 0;
  }

  .sidebar-footer {
    display: none;
  }

  .main-content {
    padding: 20px 16px;
  }

  .greeting-title {
    font-size: 20px;
  }

  .actions-grid {
    gap: 6px;
  }

  .feed-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
