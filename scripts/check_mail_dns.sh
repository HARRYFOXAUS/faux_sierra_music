DOMAIN=$1
# Check SPF
if dig +short TXT "$DOMAIN" | grep -q "v=spf1"; then
  echo "SPF ✅"
else
  echo "SPF ❌"
fi

# Check DKIM using selector 'default'
if dig +short TXT default._domainkey."$DOMAIN" | grep -q "v=DKIM1"; then
  echo "DKIM ✅"
else
  echo "DKIM ❌"
fi

# Check DMARC
if dig +short TXT _dmarc."$DOMAIN" | grep -q "v=DMARC1"; then
  echo "DMARC ✅"
else
  echo "DMARC ❌"
fi
