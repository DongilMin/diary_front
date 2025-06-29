import { Community } from "@/types/community"

export const mockCommunities: Community[] = [
  {
    id: 1,
    name: "일상의 기록",
    description: "매일의 작은 순간들을 기록하는 공간",
    category: "lifestyle",
    tags: ["일상", "기록", "생각"],
    isPrivate: false,
    memberCount: 128,
    activeMembers: 45,
    todayPosts: 12,
    weeklyGrowth: 15,
    recentActivity: "1시간 전",
    isJoined: true,
    isOwner: false,
    color: "bg-blue-100 text-blue-700",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    creator: {
      id: 1,
      email: "creator@example.com",
      nickname: "창작자",
      role: "USER"
    }
  },
  {
    id: 2,
    name: "건강한 생활",
    description: "건강한 생활습관을 공유하는 커뮤니티",
    category: "health",
    tags: ["운동", "식단", "웰빙"],
    isPrivate: false,
    memberCount: 256,
    activeMembers: 89,
    todayPosts: 23,
    weeklyGrowth: 25,
    recentActivity: "30분 전",
    isJoined: false,
    color: "bg-green-100 text-green-700",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    creator: {
      id: 2,
      email: "health@example.com",
      nickname: "헬스매니아",
      role: "USER"
    }
  }
]