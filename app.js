const Discord = require('discord.js');
require('dotenv').config();


const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

client.on('ready', () => {
  console.log('Bot is ready');
});

const smashCharacters = [
  '마리오', '동키콩', '링크', '사무스', '다크사무스', '요시', '커비', '폭스', '피카츄', '루이지', '네스', '캡틴팔콘', '푸린', '피치', '데이지', '쿠파', '얼음타기', '시크', '젤다', '닥터마리오', '피츄', '팔코', '마르스', '루키나', '소년링크' , '가논돌프', '뮤츠', '로이', '크롬', '게임&워치', '메타나이트', '피트', '블랙피트', '제슈사', '와리오', '스네이크', '아이크', '포켓몬트레이너', '디디콩', '류카', '소닉', '디디디', '피크민&올리마', '루카리오', 'ROB', '툰링크', '울프', '마을주민', '록맨', '위핏트레이너', '로젤리나&치코', '리틀맥', '개굴닌자', '팔루테나', '팩맨', '리플레', '슈르크', '쿠파주니어', '덕헌트', '류', '켄', '클라우드', '카무이', '베요네타', '잉클링', '리들리', '사이먼' , '릭터', '킹크루루', '여울', '어흥염', '뻐끔플라워', '조커', '용사', '반조카주이', '테리', '벨레스', '민민', '스티브', '세피로스', '호무라히카리'
]

const randomPichuNoises = [
  "피츄우우우!",
  "피이이이츄!",
  "핏! 핐!",
  "피유웃!",
  "피비비비비빗",
  "피츄피츄우우우우",
  "핏?",
  'https://tenor.com/view/super-smash-bros-pichu-super-smash-bros-ultimate-pokemon-walking-gif-16804409',
  'https://i.kym-cdn.com/photos/images/original/001/469/230/906.gif',
  'https://thumbs.gfycat.com/AppropriateWellgroomedBear-max-1mb.gif',
  "ㅗ",
]

const pichuChallenge = [
  "메테오피니시!",
  "쓰리스톡!!",
  "실드브레이크!",
  "풋스툴ㅋㅋㅋ",
  "메테오로 이겨봐ㅋㅋ",
  "수어사이드킬!",
  "잽락해봐잽락",
  "쓰리스톡할수있겟나",
  "스테이지 스파이크!!!",
  "미러전..ㅇㅇ",
  "스매시 한번도 안쓰고 이겨봐 ㅋㅋ",
  "메테오메테오",
  "잡기로 이겨봐",
  "리커버리 뺴고 B버튼 한번도 안쓰기 ㅋㅋ",
  "제로투데스가쟈",
  "다운B로 이기기!",
  "디스리스펙트해바 ㅎㅎ"
]


let getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}


client.login(process.env.BOT_TOKEN)

client.on('message', (msg) => {
  if (msg.content === '피츄야!') msg.channel.send(getRandom(randomPichuNoises));
  if (msg.content === '^피츄챌린지') msg.reply(getRandom(pichuChallenge));
  if (msg.content === '피츄야물어!') msg.channel.send('https://ssb.wiki.gallery/images/thumb/d/df/Pichu_Down_B_SSBU.gif/300px-Pichu_Down_B_SSBU.gif');
  if (msg.content === '^랜덤캐') msg.channel.send(getRandom(smashCharacters));
  if (msg.content === '^pichu') msg.channel.send('https://tenor.com/view/super-smash-bros-pichu-super-smash-bros-ultimate-pokemon-walking-gif-16804409');
  if (msg.content === '^surprisedpika') msg.channel.send('https://tenor.com/view/surprised-pikachu-surprised-pikachu-face-face-gif-15329743');
  if (msg.content === '^mmadd'){
    msg.guild.members.cache.get(msg.author.id).roles.add('832530352056041541')
    msg.reply('매치메이커 알림을 구독하셨습니다. Matchmaker added! :)');
  }
  if (msg.content === '^mmremove'){
    msg.guild.members.cache.get(msg.author.id).roles.remove('832530352056041541')
    msg.reply('매치메이커 알림 구독을 해제하였습니다. Matchmaker removed! :)');
  }
});



//welcome
client.on("guildMemberAdd", function(member){
  const channel = client.channels.cache.get('824633487331688471');
  channel.send(`안녕하세요 <@${member.user.id}>님!`);
});

// Adding reaction-role function
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.id == '824639835620114473') {
    if (reaction.emoji.name === '🐱') {
      await reaction.message.guild.members.cache
      .get(user.id)
      .roles.add('801079326820139038');
    }
    if (reaction.emoji.name === '⚔️') {
      await reaction.message.guild.members.cache
      .get(user.id)
      .roles.add('801078738615795743');
    }
    if (reaction.emoji.name === '🦞') {
      await reaction.message.guild.members.cache
      .get(user.id)
      .roles.add('832530352056041541');
    }
  } else return;
});

// Removing reaction roles
client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.channel.id == '824639835620114473') {
    if (reaction.emoji.name === '🐱') {
      await reaction.message.guild.members.cache
      .get(user.id)
      .roles.remove('801079326820139038');
    }
    if (reaction.emoji.name === '⚔️') {
      await reaction.message.guild.members.cache
      .get(user.id)
      .roles.remove('801078738615795743');
    }
    if (reaction.emoji.name === '🦞') {
      await reaction.message.guild.members.cache
      .get(user.id)
      .roles.remove('832530352056041541');
    }
  } else return;
});
