import { GitVideoCommentAPage } from './app.po';

describe('git-video-comment-a App', () => {
  let page: GitVideoCommentAPage;

  beforeEach(() => {
    page = new GitVideoCommentAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
