export interface BlogPart {
  text: string;
  blob_url: string | null;
  image_caption: string | null;
}

export interface Blog {
  title: string;
  author: string;
  theme: string;
  sub_theme: string | null;
  blog_parts: BlogPart[];
  tags: string[];
  references: string[];
  blob_url: string | null;
  id: string | null;
}
