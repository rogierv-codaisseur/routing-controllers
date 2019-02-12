import { JsonController, Get, Param } from 'routing-controllers';
import pagesById, { Page, PageList } from './data';

@JsonController()
export default class PageController {
  @Get('/pages/:id')
  getPage(@Param('id') id: number): Page {
    return pagesById[id];
  }

  @Get('/pages')
  allPages(): PageList {
    return { pages: Object.values(pagesById) };
  }
}
