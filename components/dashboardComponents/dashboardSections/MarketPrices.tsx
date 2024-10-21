import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import dukiaToken from "../../../assets/dukia-token.png";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { fetchProductSearch } from "@/lib/fetchProductSearch";
import { Product } from "@/typings/product";
import Link from "next/link";
import Chart from "../Chart";
import { formatCurrency } from "@/lib/currencyformatter";

const MarketPrices = () => {
  const [tab, setTab] = useState("bars");
  const [bars, setBars] = useState<Array<Product> | null>(null);
  const [coins, setCoins] = useState<Array<Product> | null>(null);

  useEffect(() => {
    const fetchBarsData = async () => {
      const barsData = await fetchProductSearch("bar");
      if (barsData) {
        setBars(barsData);
      }
    };

    const fetchCoinsData = async () => {
      const coinsData = await fetchProductSearch("coin");
      if (coinsData) {
        setCoins(coinsData);
      }
    };

    fetchBarsData();
    fetchCoinsData();

    const interval = setInterval(() => {
      fetchBarsData();
      fetchCoinsData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-2 px-4 bg-white rounded-2xl text-dukiaBlue space-y-2">
      <div className="flex items-center justify-between font-semibold">
        <p>Market Prices</p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setTab("bars")}
            className={`${
              tab === "bars" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Bars
          </button>

          <button
            type="button"
            onClick={() => setTab("coins")}
            className={`${
              tab === "coins" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Coins
          </button>

          <button
            type="button"
            onClick={() => setTab("tokens")}
            className={`${
              tab === "tokens" && "bg-[#E8E9ED] rounded-lg"
            } py-3 px-4 cursor-pointer`}
          >
            Gold Tokens
          </button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hidden md:table-row bg-dukiaGrey border-b border-dukiaBlue/[10%] hover:bg-dukiaGrey">
            <TableHead className="p-2.5 text-dukiaBlue rounded-tl-xl font-bold">
              Market Prices
            </TableHead>
            <TableHead className="p-2.5 text-dukiaBlue font-bold">
              Chart
            </TableHead>
            {(tab === "bars" || tab === "coins") && (
              <>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Bid
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Ask
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Spread
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Volume
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold rounded-tr-xl">
                  Chg 24h
                </TableHead>
              </>
            )}

            {tab === "tokens" && (
              <>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Price
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  24h Change
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  24h Volume
                </TableHead>
                <TableHead className="p-2.5 text-dukiaBlue font-bold">
                  Market Cap
                </TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Tokens Table */}
          {tab === "tokens" && (
            // Example tokens
            <TableRow className="font-semibold text-[#676D88]">
              {/* Product */}
              <TableCell className="p-2.5">
                <span className="flex items-center gap-3">
                  <Image
                    src={dukiaToken}
                    alt="Dukia Token"
                    width={60}
                    height={51.92}
                  />
                  <p>Dukia Aureus</p>
                </span>
              </TableCell>

              {/* Chart */}
              <TableCell className="p-2.5">
                <div>
                  <Chart chartId="chart-token" />
                </div>
              </TableCell>

              {/* Price */}
              <TableCell className="p-2.5">₦ 180,321.85</TableCell>

              {/* 24h Change */}
              <TableCell className="p-2.5 text-[#43BA64]">
                <span className="flex items-center">
                  <ArrowUp width={16} height={16} />
                  <p>1.99%</p>
                </span>
              </TableCell>

              {/* 24h Vol */}
              <TableCell className="p-2.5">₦ 1,321.85</TableCell>

              {/* Market Cap */}
              <TableCell className="p-2.5">₦ 180.3M</TableCell>
            </TableRow>
          )}

          {tab === "bars" &&
            bars &&
            bars.map((bar, index) => (
              <TableRow key={index} className="font-semibold text-[#676D88]">
                {/* Name and Thumbnail */}

                <TableCell className="p-2.5">
                  <Link
                    href={{
                      pathname: "/dashboard/assets",
                      query: { id: bar.id },
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Image
                        src={bar.thumbnail_url}
                        alt="Dukia Token"
                        width={23.5}
                        height={40}
                        className="transform rotate-90"
                      />

                      <p>{bar.name}</p>
                    </span>
                  </Link>
                </TableCell>

                {/* Chart */}
                <TableCell className="p-2.5">
                  <div>
                    {/* <Chart chartId={`chart-${bar.id}-${index}`} /> */}
                  </div>
                </TableCell>

                <TableCell className="p-2.5">
                  {bar.bid_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">
                  {bar.ask_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">{formatCurrency(bar.ask_price - bar.bid_price)}</TableCell>
                <TableCell className="p-2.5">{bar.margin_bid}</TableCell>
                <TableCell className="p-2.5 text-[#43BA64]">
                  <span className="flex items-center">
                    <ArrowUp width={16} height={16} />
                    {bar.margin_bid}
                  </span>
                </TableCell>
              </TableRow>
            ))}

          {tab === "coins" &&
            coins &&
            coins.map((coin, index) => (
              <TableRow key={index} className="font-semibold text-[#676D88]">
                {/* Name and Thumbnail */}
                <TableCell className="p-2.5">
                  <Link
                    href={{
                      pathname: "/dashboard/assets",
                      query: { id: coin.id },
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Image
                        src={coin.thumbnail_url}
                        alt="Dukia Token"
                        width={60}
                        height={60}
                      />

                      <p>{coin.name}</p>
                    </span>
                  </Link>
                </TableCell>

                {/* Chart */}
                <TableCell className="p-2.5">
                  {/* <Chart chartId={`chart-${coin.id}-${index}`} /> */}
                </TableCell>

                <TableCell className="p-2.5">
                  {coin.bid_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">
                  {coin.ask_formattedPrice}
                </TableCell>
                <TableCell className="p-2.5">{coin.margin_ask}</TableCell>
                <TableCell className="p-2.5">{coin.margin_bid}</TableCell>
                <TableCell className="p-2.5 text-[#43BA64]">
                  <span className="flex items-center">
                    <ArrowUp width={16} height={16} />
                    {coin.margin_bid}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default MarketPrices;
