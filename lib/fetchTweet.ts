export async function fetchTweet(id: string): Promise<{
  text: string;
  user: any;
  photos: any[];
  video: any | undefined;
  media: any | undefined;
}> {
  const baseUrl = "https://cdn.syndication.twimg.com/tweet-result";

  const res = await fetch(`${baseUrl}?id=${id}`);
  const data = await res.json();
  const { text, user, photos, video, entities } = data;
  return {
    text,
    user,
    photos: photos ? photos : [],
    video,
    media: entities.media,
  };
}
