import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 element', () => {
  render(<App />);
  const h1Element = screen.getByText('A history of everything you copy', {
    selector: 'h1',
  });
  expect(h1Element).toBeInTheDocument();
});

test('renders header paragraph', () => {
  render(<App />);
  const headerParag = screen.getByText(
    'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.',
    { selector: 'p' }
  );
  expect(headerParag).toBeInTheDocument();
});

test('renders download for IOS button', () => {
  render(<App />);
  const iosDownloadButton = screen.getAllByText('Download for iOS', {
    selector: 'button',
  });
  expect(iosDownloadButton.length).toEqual(2);
  expect(iosDownloadButton[0]).toBeInTheDocument();
  expect(iosDownloadButton[1]).toBeInTheDocument();
});

test('renders download for Mac button', () => {
  render(<App />);
  const macDownloadButton = screen.getAllByText('Download for Mac', {
    selector: 'button',
  });
  expect(macDownloadButton.length).toEqual(2);
  expect(macDownloadButton[0]).toBeInTheDocument();
  expect(macDownloadButton[1]).toBeInTheDocument();
});

test('renders Desktop image', () => {
  render(<App />);
  const desktopImg = screen.getAllByAltText('Clipboard for Desktop');
  expect(desktopImg.length).toEqual(1);
  expect(desktopImg[0]).toBeInTheDocument();
});

test('renders tablet&mobile image', () => {
  render(<App />);
  const desktopImg = screen.getAllByAltText('Clipboard for Tablet and Mobile');
  expect(desktopImg.length).toEqual(1);
  expect(desktopImg[0]).toBeInTheDocument();
});

test('renders companies images', () => {
  render(<App />);
  const desktopImg = screen.getAllByAltText('', { selector: 'img' });
  expect(desktopImg.length).toEqual(5);
  expect(desktopImg[0]).toBeInTheDocument();
  expect(desktopImg[1]).toBeInTheDocument();
  expect(desktopImg[2]).toBeInTheDocument();
  expect(desktopImg[3]).toBeInTheDocument();
  expect(desktopImg[4]).toBeInTheDocument();
});

test('renders social images', () => {
  render(<App />);
  const desktopImg = screen.getAllByAltText(/ * page/i, { selector: 'img' });
  expect(desktopImg.length).toEqual(3);
  expect(desktopImg[0]).toBeInTheDocument();
  expect(desktopImg[1]).toBeInTheDocument();
  expect(desktopImg[2]).toBeInTheDocument();
});
