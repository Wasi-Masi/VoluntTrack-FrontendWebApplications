import { Activity } from './dashboard.entity';

describe('DashboardEntity', () => {
  it('should create an instance', () => {
    const activity = new Activity(
      1,
      'Test Activity',
      'path/to/dashboardPicture.jpg',
      [
        'path/to/mainPicture.jpg',
        'path/to/picture1.jpg',
        'path/to/picture2.jpg',
        'path/to/picture3.jpg',
        'path/to/picture4.jpg'
      ],
      '2025-05-12',
      '10:00',
      '12:00',
      '123 Main St',
      'This is a test activity',
      ['Instruction 1', 'Instruction 2'],
      ['Purpose 1', 'Purpose 2'],
      10,
      true
    );
    expect(activity).toBeTruthy();
  });
});
