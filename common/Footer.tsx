import { darken, lighten } from 'polished'
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa'

const SOCIALS = {
  discord: { icon: <FaDiscord />, link: 'https://discord.gg/bSZnKaD3YA' },
  twitter: { icon: <FaTwitter />, link: 'https://twitter.com/stonedfarms' },
}

export const Footer = ({
  bgColor = '#344E41',
  accentColor = '#344E41',
}: {
  bgColor?: string
  accentColor?: string
}) => {
  return (
    <div
      className="mt-5 px-10 pt-5 pb-5 md:px-32 "
    >
      <div className="flex w-full flex-wrap items-start justify-between gap-10 pt-10">
        <div className="flex gap-10 self-end text-center md:gap-20">
          <span className="flex flex-col items-start gap-1">
            {/*<a href="" className="text-gray-400">
              Privacy
            </a> */}
          </span>
          {/* <span className="flex flex-col items-start">
            <div className="mb-5 text-lg font-semibold">Company</div>
            <a href="https://www.cardinal.so/" className="text-gray-400">
              Website
            </a>
            <a href="" className="text-gray-400">
              Blog
            </a>
            <a
              href="https://twitter.com/cardinal_labs"
              className="text-gray-400"
            >
              Twitter
            </a>
            <a
              href="https://discord.com/invite/byq6uNTugq"
              className="text-gray-400"
            >
              Discord
            </a>
          </span> */}
        </div>
      </div>
      <div
        className="text-md flex items-center justify-between border-t border-white py-4 text-gray-400 pt-8"
      >
        <div className="flex items-center justify-center gap-2 text-gray-400 -mt-1 z-50">
          <a
            target="_blank"
            href="https://stonedfarms.io/"
            className="flex cursor-pointer text-xl font-semibold text-black hover:text-gray-300"
          >

            <img className="h-16 w-42" src='SFFooterWhite.png' />

          </a>
        </div>
        <div className="flex gap-4 text-gray-100">
          {Object.entries(SOCIALS).map(([id, { icon, link }]) => {
            return (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                className={`hover:text-primary text-white text-2xl opacity-100 transition-opacity hover:text-gray-200 z-50`}
              >
                {icon}
              </a>
            )
          })}
        </div>
      </div>
      {/* <div className="text-md flex flex-row justify-center font-medium">
        Copyright 2022 Cardinal Labs. All rights reserved
      </div> */}
    </div>
  )
}
