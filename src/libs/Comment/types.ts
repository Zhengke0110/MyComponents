/**
 * 评论数据接口
 */
export interface CommentData {
  id: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
  likes?: number;
  liked?: boolean;
  isAuthor?: boolean;
  allowDelete?: boolean;
  replyTo?: {
    id: string;
    author: string;
  };
  children?: CommentData[];
}

/**
 * 提交评论事件数据
 */
export interface CommentSubmitData {
  content: string;
  replyTo: string | null;
}
