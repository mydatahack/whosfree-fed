cd code && ^
npm run deploy:prod && ^
cd .. && ^
cd react && ^
npm run build && ^
cd .. && ^
jekyll build && ^

jekyll serve