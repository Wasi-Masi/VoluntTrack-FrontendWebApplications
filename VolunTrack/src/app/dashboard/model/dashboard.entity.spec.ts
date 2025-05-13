import { Activity } from './dashboard.entity';

describe('DashboardEntity', () => {
  it('should create an instance', () => {
    const activity = new Activity(
      1,                            // id
      'Test Activity',              // title
      'path/to/dashboardPicture.jpg', // dashboardPicture
      'path/to/mainPicture.jpg',    // mainPicture
      'path/to/picture1.jpg',       // picture1
      'path/to/picture2.jpg',       // picture2
      'path/to/picture3.jpg',       // picture3
      'path/to/picture4.jpg',       // picture4
      '2025-05-12',                 // date
      '10:00',                      // startTime
      '12:00',                      // endTime
      '123 Main St',                // address
      'This is a test activity',   // description
      ['Instruction 1', 'Instruction 2'],  // instructions
      ['Purpose 1', 'Purpose 2'],  // purpose
      10,                           // inscriptionCount
      true                          // isInscriptionOpen
    );
    expect(activity).toBeTruthy();
  });
});
