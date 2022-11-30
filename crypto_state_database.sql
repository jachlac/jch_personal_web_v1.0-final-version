-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 29, 2022 at 11:08 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crypto_state_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

DROP TABLE IF EXISTS `updates`;
CREATE TABLE IF NOT EXISTS `updates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tittle` varchar(250) NOT NULL,
  `subtittle` text NOT NULL,
  `body` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`id`, `tittle`, `subtittle`, `body`, `img_id`) VALUES
(20, 'Here\'s why $16.5K is critical for November\'s $1.14B Bitcoin options expiry (source: cointelegraph.com)', 'BTC bulls were liquidated during the drop to $15,500 on Nov. 21, and more downside could occur if bears profit $245 million during Friday\'s expiry.', 'Bitcoin faced a 7.3% drop between Nov. 20-21 as it tested the $15,500 support. While the correction seems small, the movement has caused $230 million in liquidations in futures contracts. Consequently, bulls using leverage came out ill-prepared for the $1.14 billion monthly options expiry on Nov. 25. Bitcoin investors\' sentiment worsened after Genesis Trading, which is part of the Digital Currency Group (DCG) conglomerate, halted payouts at its crypto lending arm on Nov. 16. More importantly, DCG owns the fund management company Grayscale, which is responsible for the largest institutional Bitcoin investment vehicle, the Grayscale Bitcoin Trust (GBTC). Additionally, Bitcoin miner Core Scientific has warned of \"substantial doubt\" about its continued operations over the next 12 months given its financial uncertainty. In its quarterly report filed with the United States Securities and Exchange Commission (SEC) on Nov. 22, the firm reported a net loss of $434.8 million inthe third quarter of 2022. Meanwhile, New York Attorney General Letitia James addressed a letter to the members of U.S. Congress on Nov. 22 recommending barring the purchase of cryptocurrencies using funds in IRAs and defined contribution plans such as 401(k) and 457 plans. Despite bulls\' best efforts, Bitcoin has not been able to post a daily close above $17,000 since Nov. 11. This movement explains why the $1.14 billion Bitcoin monthly options expiry on Nov. 25 could benefit bears despite the 6% rally from the $15,500 bottom.', 'r5ugzv2bopryubhhcgyp'),
(16, 'Central banks can use Bitcoin to fight off sanctions: Harvard research (source: cointelegraph.com)', 'Matthew Ferranti, a Ph.D. candidate at Harvard, pointed out that Bitcoin is an optimal alternative hedging asset for central banks.', 'A research paper published at Harvard university highlighted how central banks can use Bitcoin to hedge against financial sanctions from fiat reserve issuers. \r\n\r\nA working paper, titled “Hedging Sanctions Risk: Cryptocurrency in Central Bank Reserves,” released by Matthew Ferranti, a Ph.D. candidate at the university’s economics department, explored the potential of Bitcoin as an alternative hedging asset for central banks to fight off potential sanctions.\r\n\r\nFerranti argued that there’s merit for central banks to hold a small amount of Bitcoin even in normal circumstances. However, when there’s a risk of sanctions, the researcher said that it makes sense to hold a larger portion of BTC along with their gold reserves.\r\n\r\nIn the paper, the researcher also pointed out that countries that were facing risks of sanctions from the United States have been increasing the share of their gold reserves much more than countries that had less sanction risk. If these central banks cannot acquire enough gold to hedge the risks of sanctions, the researcher argued that Bitcoin reserves are an optimal alternative.\r\n\r\nApart from this, the researcher believes that the risk of sanctions may eventually spur diversification in central bank reserves, strengthening the value of crypto and gold. Ferranti concluded that there are significant benefits in diversifying reserves and allocating portions to both Bitcoin and gold.\r\nDigital strategists at the Bank of America (BofA) highlighted that the rise in the correlation between BTC and gold is an indicator of investors’ confidence in Bitcoin during the current economic downturn. In addition, the BofA strategists believe that the rise of self-custody also indicates a potential decrease in sell pressure.\r\n\r\nWhile self-custody has started to become highlighted amid the fall of the FTX exchange, some community members argued that it’s not without risks. From bugs within smart contracts to loved ones accessing crypto assets after death, community members pointed out potential issues that might arise when people of to self-custody their digital assets.\r\n', 'lyzenyyawlnxzh0tctou'),
(18, 'Coinbase CEO Says Company Holds 2 Million Bitcoin, Reminds People Firm’s ‘Financials Are Public’ (source: news.bitcoin.com)', 'According to Coinbase CEO Brian Armstrong, as of Sept. 30, 2022, the company holds 2 million bitcoin worth $39.9 billion. The news Armstrong shared comes at a time when the general public is looking directly at exchange balances following FTX’s turbulent collapse.', 'Two days ago, Bitcoin.com News reported on Binance’s exchange reserves and at the time the trading platform had close to 600,000 bitcoin, according to cryptoquant.com metrics. As of Nov. 20, 2022, cryptoquant.com stats indicate that Binance holds roughly 584K bitcoin. On the same day, data shows that Coinbase Pro, otherwise known as Coinbase Exchange, holds roughly 532K bitcoin.\r\n\r\nFurthermore, our newsdesk also reported on Grayscale discussing its balance sheet, as the fund manager noted that “all digital assets that underlie Grayscale’s digital asset products are stored under the custody of Coinbase Custody Trust Company.” Between Coinbase’s different services, like the exchange and custody solutions, the publicly-listed company holds a great deal of bitcoin (BTC).\r\n\r\nOn Nov. 22, 2022, Coinbase (Nasdaq: COIN) co-founder and CEO Brian Armstrong tweeted about the firm’s BTC stash in order to dispel any ‘fear, uncertainty, and doubt’ (FUD). “If you see FUD out there – remember, our financials are public (we’re a public company),” Armstrong said on Tuesday. “We hold ~2M BTC. ~$39.9B worth as of 9/30.” The Coinbase co-founder added:\r\n\r\nWe all need to come together to build this industry in a responsible way going forward. Be wary of false information.\r\n\r\nArmstrong further shared the company’s shareholder letter, which highlights a consolidated list of Coinbase assets. The Coinbase CEO’s statements on Twitter follow the conversations concerning proof-of-reserves and financial audits.\r\n\r\n\r\nScreenshot shared on Twitter by Coinbase CEO Brian Armstrong on Nov. 22, 2022.\r\nThe proof-of-reserves topic has gained traction and a handful of exchanges have announced upcoming proof-of-reserve audits. For instance, on Nov. 21, 2022, Bitstamp detailed that the company has been audited since 2016.\r\n\r\n“Bitstamp Group and our legal entities have been audited by a big four global accounting firm on an annual basis since 2016,” Bitstamp said on Monday. “They will be releasing our proof of reserves audit and the corresponding proof of liabilities. These will provide our customers with an independently conducted verification of their Bitstamp balances, and the assurance that Bitstamp has the assets to cover them fully.”\r\n\r\nWhile Coinbase Global shares are down 82% year-to-date, COIN shares gained 5.24% just before the closing bell on Wall Street on Nov. 22. COIN shares are currently trading for $43.39 per share on Tuesday afternoon (ET). “The transparency and quick response is much needed and appreciated atm,” one person replied to Armstrong’s tweet about Coinbase’s bitcoin holdings on Tuesday.\r\n', 'fzghabum4fuggg8vqlyq');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `password`) VALUES
(1, 'Jose', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
