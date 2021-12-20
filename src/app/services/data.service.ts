import {Injectable} from '@angular/core';
import {Item} from '../shared/models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Item[] = [
    {
      id: 1,
      category: 'Category 1',
      name: 'Name 1',
      description: 'Descr 1',
      featured: true,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 100,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 2,
      category: 'Category 2',
      name: 'Name 2',
      description: 'Descr 2',
      featured: false,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 200,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 3,
      category: 'Category 3',
      name: 'Name 3',
      description: 'Descr 3',
      featured: true,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 300,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 4,
      category: 'Category 4',
      name: 'Name 4',
      description: 'Descr 4',
      featured: false,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 400,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 5,
      category: 'Category 5',
      name: 'Name 5',
      description: 'Descr 5',
      featured: true,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 500,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 6,
      category: 'Category 6',
      name: 'Name 6',
      description: 'Descr 6',
      featured: false,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 600,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 7,
      category: 'Category 7',
      name: 'Name 7',
      description: 'Descr 7',
      featured: true,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 700,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 8,
      category: 'Category 8',
      name: 'Name 8',
      description: 'Descr 8',
      featured: false,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 800,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 9,
      category: 'Category 9',
      name: 'Name 9',
      description: 'Descr 9',
      featured: true,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 900,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
    {
      id: 10,
      category: 'Category 10',
      name: 'Name 10',
      description: 'Descr 10',
      featured: true,
      image: 'https://place-hold.it/200x200',
      label: 'Lorem ipsum...',
      price: 100,
      comments: [
        {
          rating: 1,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 5,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
        {
          rating: 3,
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus. Morbi metus nunc, interdum eget dolor sed, semper accumsan lorem. Sed aliquet ante vitae venenatis sagittis. In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
          author: 'Zdendiak Vasyl',
          date: '2020-04-25T11:16:13.556094Z',
        },
      ]
    },
  ];

  constructor() {
  }
}
