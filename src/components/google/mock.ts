export const mockGoogleData = {
  "emails": [
    {
      "id": "18848cd9c3f64c86",
      "threadId": "18848cd9c3f64c86",
      "labelIds": [
        "UNREAD",
        "IMPORTANT",
        "CATEGORY_FORUMS",
        "INBOX"
      ],
      "snippet": "Hello Securly team! We&#39;re happy to share that the Package 13 update for Filter and Aware is coming in late May. Specific information on when this package is deployed to particular clusters will be",
      "payload": {
        "partId": "",
        "mimeType": "multipart/alternative",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:5dca:0:0:0:0:0 with SMTP id u10csp261612ocp;        Tue, 23 May 2023 06:30:14 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6871:585:b0:177:a5e2:442e with SMTP id u5-20020a056871058500b00177a5e2442emr5344774oan.43.1684848614567;        Tue, 23 May 2023 06:30:14 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=3; a=rsa-sha256; t=1684848614; cv=pass;        d=google.com; s=arc-20160816;        b=vIHZmhqKml6atdQgvbYhB8O6nlubArpf4RoHQ2TOObVO1Kr/y77+zPe6c8xqISnBnm         c9BGLLMoPxZCNWHKsvGE/B9PLjtUsXKVcfYYbrczX1fg9UcCrpZx5KYK2M1duHa0RJch         ygiHMmqWk2QY6DXpmNJhypTT017FpafS+oqNkE3U9UZ7pdfMkeTSRLMfsJg3iXaEtFmh         Qd+HTxSOPmVr5iyMMh12OFbdOqvuWtOHBWAHSiv8iWyIxbtg6e8Ln7lIJ+5211LsYaI6         EIt/cK0A/Sh36j/ONelhtwDCGO9hC5hTHfCk7wsTzhgggOs4v4pKPt6PdGOMlEeRv+T8         krig=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=3; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=list-subscribe:list-archive:list-help:list-post:mailing-list         :precedence:mime-version:list-unsubscribe-post:list-unsubscribe         :list-id:feedback-id:message-id:date:to:reply-to:from:subject         :dkim-signature;        bh=gcsQtb1J6doKoAM2TFUuymW9qjL9WU3crH/TxMRy8q4=;        b=Hge8dcrDwt4Qn4q312dKQ6cshgkcMLZpmKpwkiD8aoG3mSVQRyO45g34f/+BMHNoQO         5f0x7q2NErDXwgaUFCSbxTJxX5bGfbIK/3tTzGZbGt0MGwy3T/hDBItAjf2PLsuG6066         nsPXuNZlwkPepsy3NmPuR1gcsRYov4ahM++v4cisx/XB1Mp3hkc9DuCR6mDrcQX78oWh         6T4GLQT513N9oUpwxdk8qNURkEB+TCcd3Xv60FYb8a0eXoY4jQFNINGysS0SEEmz8s2p         +QHfHIVXfU6vIn5BE6KaAC7LHd2EeXc88nTosd+3pj2f25mm25iTV7xdorZG1SvJsyfe         TDiA=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=3; mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=LyK6i8G7;       arc=pass (i=2 spf=pass spfdomain=mail229.wdc02.mcdlv.net dkim=pass dkdomain=securly.com dmarc=pass fromdomain=securly.com);       spf=pass (google.com: domain of every+bncbcfldw64wipbbup7wkrqmgqelvsa37y@securly.com designates 209.85.220.69 as permitted sender) smtp.mailfrom=every+bncBCFLDW64WIPBBUP7WKRQMGQELVSA37Y@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Return-Path",
            "value": "<every+bncBCFLDW64WIPBBUP7WKRQMGQELVSA37Y@securly.com>"
          },
          {
            "name": "Received",
            "value": "from mail-sor-f69.google.com (mail-sor-f69.google.com. [209.85.220.69])        by mx.google.com with SMTPS id eb40-20020a056870a8a800b0018f0b002cdfsor1811090oab.8.2023.05.23.06.30.14        for <pratik.tiwari@securly.com>        (Google Transport Security);        Tue, 23 May 2023 06:30:14 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of every+bncbcfldw64wipbbup7wkrqmgqelvsa37y@securly.com designates 209.85.220.69 as permitted sender) client-ip=209.85.220.69;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=LyK6i8G7;       arc=pass (i=2 spf=pass spfdomain=mail229.wdc02.mcdlv.net dkim=pass dkdomain=securly.com dmarc=pass fromdomain=securly.com);       spf=pass (google.com: domain of every+bncbcfldw64wipbbup7wkrqmgqelvsa37y@securly.com designates 209.85.220.69 as permitted sender) smtp.mailfrom=every+bncBCFLDW64WIPBBUP7WKRQMGQELVSA37Y@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "ARC-Seal",
            "value": "i=2; a=rsa-sha256; t=1684848614; cv=pass;        d=google.com; s=arc-20160816;        b=CnwO4NQBXyOLrzapb66oNbDq3/Gt3xCfo4Od5sLy82xYbQEe7wbr7TP6SJ7UatjHDB         nfHfyal67wPCQ0UVk2qSH10TKpiq7uExh+EJLt7vKnvhDVp+dfVa5zIAjdOpsEXUFbVM         6WcqTumiRqVIdU4N1efyv7EcrulYMU+wuMj2LhfnAceCxAIOScjNH8l2wONQKLSpKF/k         +44XLExk00KKJVuVI9BHg00td8aFGGsYe+wA4qvN1yb91k5wYY6nH44FtWLHlRRRl1y0         E3DBiVASH1hszKp4ufVViFhfKK3Q74ywxNr2p07kpfNrx9NCewVV+cnsnk+8tf5EXi92         24kw=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=2; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=list-subscribe:list-archive:list-help:list-post:mailing-list         :precedence:mime-version:list-unsubscribe-post:list-unsubscribe         :list-id:feedback-id:message-id:date:to:reply-to:from:subject         :dkim-signature;        bh=gcsQtb1J6doKoAM2TFUuymW9qjL9WU3crH/TxMRy8q4=;        b=0aTLuJJ9qJcffE6ZNkUtwGLrwM/7IBxj4ZyZfKUGHX63EYA0eTC0TnK3JvMoBYvHtp         ZtuH1JfM6D0NhJn7p6EnV3h4GIF+mXtdVYkLEFUvRnVVgCF0pkP9tOIyBStdm77G06G1         Nsa5B3CjOZ9IjCZ4KGBStbx17Wj8acbz5COaqVCWWxlIveLl1/v3rWBbIE0/cSPNbTUE         mH3w7tEynCd2Xhc+oJkJVeSvbyFjZmHDE0IVPjSTJS9jC1AdHjJ4HCm6/m2P0VzF7mUR         NV5w63uXeU7XMmbXQN+QZscIVxcmqHksIek4GgkgPAPWzyGRHXS/RJ27tR+2O1E49xJu         WDFQ=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=2; mx.google.com;       dkim=pass header.i=@securly.com header.s=k1 header.b=nD4+z+88;       spf=pass (google.com: domain of bounce-mc.us13_56201157.1608144-4e1ef36e05@mail229.wdc02.mcdlv.net designates 205.201.130.229 as permitted sender) smtp.mailfrom=bounce-mc.us13_56201157.1608144-4e1ef36e05@mail229.wdc02.mcdlv.net;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=securly.com; s=google; t=1684848614; x=1687440614;        h=list-subscribe:list-archive:list-help:list-post:mailing-list         :precedence:x-original-authentication-results:x-original-sender         :mime-version:list-unsubscribe-post:list-unsubscribe:list-id         :feedback-id:message-id:date:to:reply-to:from:subject:from:to:cc         :subject:date:message-id:reply-to;        bh=gcsQtb1J6doKoAM2TFUuymW9qjL9WU3crH/TxMRy8q4=;        b=LyK6i8G7vnFe9zNQVKxUbKmLKDiFqg1K4rrXJZHI3qLw6z0CrB9GRdP9QAIMEOb46a         g8ZIAFPwh/V8zSuiUJoMrCIVb1+CvySy3eLxa0yob4rq9D/MiiJGwAY9eD1ciGq4nHNl         UVzgDM2ggLzgYp8UuxEVKhqWWhf21Y61PgwZk9l9n/kliSAE5XhdnmhtGCBUfmaEauoL         /fBXFS4HFgZdU2hPN0RI8i1ZV9fROlUNZpvZdMc4+G9oZL41k8QneHgg7yAJ0pFKCC7V         FKEnrmuF8F3eBQgR/8ouHcHaZ2ZTzbDnRW2BvtepovJBcnEACB/ZkA91at2SUAmfUrAb         +EBg=="
          },
          {
            "name": "X-Google-DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20221208; t=1684848614; x=1687440614;        h=list-subscribe:list-archive:list-help:list-post         :x-spam-checked-in-group:mailing-list:precedence         :x-original-authentication-results:x-original-sender:mime-version         :list-unsubscribe-post:list-unsubscribe:list-id:feedback-id         :message-id:date:to:reply-to:from:subject:x-beenthere:x-beenthere         :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;        bh=gcsQtb1J6doKoAM2TFUuymW9qjL9WU3crH/TxMRy8q4=;        b=YuRCflfFxnzwCZVVrndBTdEDDvONpRd/PoIQ662MkKQYxA3EM1Ywe8e14DAYMojhPH         PfwETORVYrBHK6j8vnGrTtusgQmyIoB9aIZotDzCqEF6rqt0IPQhY++eQEsrdmbtqBX+         Xtdmz2Z3HXJ29X1efw7pPHyVM7xMdrpfKIhH1CjuDZHt9SmbLQhFiPtGrqQ50usDx8s+         aw3/mnVsT73AOjKwEcxPHZktE9RGZmaIhrrKaU+q/SwDwlYrtmia4lxZkc8kAulfhi3q         CJQ1MGIJ8qo89xgE9fK5tb+hAat8AHA5gVSbbwgWMtnoQeCS7XWcTUio96Y0bCeVR7AC         1okQ=="
          },
          {
            "name": "X-Gm-Message-State",
            "value": "AC+VfDxd+LIxUeaA+47kgtuH6EAUQjPWlIRCckhLRUW1NLlvzBETOQ3u V7WNy56dgvFOx3ZzeEupnpRm9FIG"
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ7YFGT4Yt4oX/zMCcnrHQwm+vCIs2jkcMS4iWDB9kwgj+9G4GUjt+GwwcJ5Jw5jFcGHLlEJTQ=="
          },
          {
            "name": "X-Received",
            "value": "by 2002:a81:b147:0:b0:561:987e:d22 with SMTP id p68-20020a81b147000000b00561987e0d22mr8609899ywh.1.1684848593476;        Tue, 23 May 2023 06:29:53 -0700 (PDT)"
          },
          {
            "name": "X-BeenThere",
            "value": "every@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:a25:ab52:0:b0:ba8:242b:4ba5 with SMTP id u76-20020a25ab52000000b00ba8242b4ba5ls1987988ybi.1.-pod-prod-00-us; Tue, 23 May 2023 06:29:52 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6902:1343:b0:ba8:4d1c:dd04 with SMTP id g3-20020a056902134300b00ba84d1cdd04mr8875676ybu.1.1684848592450;        Tue, 23 May 2023 06:29:52 -0700 (PDT)"
          },
          {
            "name": "X-BeenThere",
            "value": "all@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:a25:10c1:0:b0:ba7:99a5:5670 with SMTP id 184-20020a2510c1000000b00ba799a55670ls1349108ybq.1.-pod-prod-07-us; Tue, 23 May 2023 06:29:52 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6902:100e:b0:b9d:82ca:92fe with SMTP id w14-20020a056902100e00b00b9d82ca92femr18141936ybt.21.1684848591567;        Tue, 23 May 2023 06:29:51 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684848591; cv=none;        d=google.com; s=arc-20160816;        b=s/Nt9aO672bpq5SCzY3eKy9/r0PBb2MprmMx5FX/HxMZgVFNOq0tzDMlTMWweUs0Jz         HedBwAOhRQ+hHIZLnZOJy/yXGfJj8yJespX9zqzZZopm/07AgRu8kCT9eJt6fexPFeIY         cEDkvoNifyNxyzBnEvRZiNfDp3yMUSsoRD5YWsujEafATJ0TSE/pb53SodXzEZo2T17B         J9MIPY8VBuOaU3IKEyM5HLtLM6L9unev18p5mEVeyW75i4k84KjPMoskfMXBve192ed1         Kth1Xd/3zomNsYjxqp1BDSmBVPy/TuK9KldkqOMcVfBtoN2QT5WA9F/SoPfZvMtTXLP0         6peg=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=mime-version:list-unsubscribe-post:list-unsubscribe:list-id         :feedback-id:message-id:date:to:reply-to:from:subject:dkim-signature;        bh=gcsQtb1J6doKoAM2TFUuymW9qjL9WU3crH/TxMRy8q4=;        b=ik73uoZVLhUCrj5v5byW+Pn7d3xd6+50stC5NS8s7JswXRNeyJud7cJi6MOOgdY4vY         PzzwJsbu3PuLNl/pUYA7wlt0c2r904T+nCPFMFJaEkSp9HheEmHhMeIcCW7qst8ejnp3         GTxpGF+2xnjHmXMx1TD/utETb7wFEG+fQqvVq5EtkRISAc3CxcAcqOLFM20znh7YQ5y7         wxWF/nX9JcmwgHecjvxk9p6wSMf8jzECAH948AVGAHqK2U+PY/w+mOJEViZ/hR7Y+d0l         //dj/2EUNdIlM3dYBIRIUhZPqcdMj7zBwILP78uACjsYpaFtGlcV2n9J2zOAkmi7O0Zu         aWBg=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@securly.com header.s=k1 header.b=nD4+z+88;       spf=pass (google.com: domain of bounce-mc.us13_56201157.1608144-4e1ef36e05@mail229.wdc02.mcdlv.net designates 205.201.130.229 as permitted sender) smtp.mailfrom=bounce-mc.us13_56201157.1608144-4e1ef36e05@mail229.wdc02.mcdlv.net;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Received",
            "value": "from mail229.wdc02.mcdlv.net (mail229.wdc02.mcdlv.net. [205.201.130.229])        by mx.google.com with ESMTPS id r14-20020a25ac4e000000b00ba7f11a70fasi7962768ybd.281.2023.05.23.06.29.51        for <all@securly.com>        (version=TLS1_3 cipher=TLS_AES_256_GCM_SHA384 bits=256/256);        Tue, 23 May 2023 06:29:51 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of bounce-mc.us13_56201157.1608144-4e1ef36e05@mail229.wdc02.mcdlv.net designates 205.201.130.229 as permitted sender) client-ip=205.201.130.229;"
          },
          {
            "name": "Received",
            "value": "from localhost (localhost [127.0.0.1]) by mail229.wdc02.mcdlv.net (Mailchimp) with ESMTP id 4QQZtR2XPRzHXtbD1 for <all@securly.com>; Tue, 23 May 2023 13:29:51 +0000 (GMT)"
          },
          {
            "name": "Subject",
            "value": "Safety Console Package 13, coming May 202"
          },
          {
            "name": "From",
            "value": "Julie Withrow <julie.withrow@securly.com>"
          },
          {
            "name": "Reply-To",
            "value": "Julie Withrow <julie.withrow@securly.com>"
          },
          {
            "name": "To",
            "value": "<all@securly.com>"
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 13:29:51 +0000"
          },
          {
            "name": "Message-ID",
            "value": "<e69c231a28045cb10ee7d8c12.4e1ef36e05.20230523132947.11900c349b.44eb8deb@mail229.wdc02.mcdlv.net>"
          },
          {
            "name": "X-Mailer",
            "value": "Mailchimp Mailer - **CID11900c349b4e1ef36e05**"
          },
          {
            "name": "X-Campaign",
            "value": "mailchimpe69c231a28045cb10ee7d8c12.11900c349b"
          },
          {
            "name": "X-campaignid",
            "value": "mailchimpe69c231a28045cb10ee7d8c12.11900c349b"
          },
          {
            "name": "X-Report-Abuse",
            "value": "Please report abuse for this campaign here: https://mailchimp.com/contact/abuse/?u=e69c231a28045cb10ee7d8c12&id=11900c349b&e=4e1ef36e05"
          },
          {
            "name": "X-MC-User",
            "value": "e69c231a28045cb10ee7d8c12"
          },
          {
            "name": "Feedback-ID",
            "value": "56201157:56201157.1608144:us13:mc"
          },
          {
            "name": "List-ID",
            "value": "<every.securly.com>"
          },
          {
            "name": "X-Accounttype",
            "value": "pd"
          },
          {
            "name": "List-Unsubscribe",
            "value": "<mailto:googlegroups-manage+240655411456+unsubscribe@googlegroups.com>, <https://groups.google.com/a/securly.com/group/every/subscribe>"
          },
          {
            "name": "List-Unsubscribe-Post",
            "value": "List-Unsubscribe=One-Click"
          },
          {
            "name": "Content-Type",
            "value": "multipart/alternative; boundary=\"_----------=_MCPart_1103567343\""
          },
          {
            "name": "MIME-Version",
            "value": "1.0"
          },
          {
            "name": "X-Original-Sender",
            "value": "julie.withrow@securly.com"
          },
          {
            "name": "X-Original-Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=k1 header.b=nD4+z+88;       spf=pass (google.com: domain of bounce-mc.us13_56201157.1608144-4e1ef36e05@mail229.wdc02.mcdlv.net designates 205.201.130.229 as permitted sender) smtp.mailfrom=bounce-mc.us13_56201157.1608144-4e1ef36e05@mail229.wdc02.mcdlv.net;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Precedence",
            "value": "list"
          },
          {
            "name": "Mailing-list",
            "value": "list every@securly.com; contact every+owners@securly.com"
          },
          {
            "name": "X-Spam-Checked-In-Group",
            "value": "all@securly.com"
          },
          {
            "name": "X-Google-Group-Id",
            "value": "240655411456"
          },
          {
            "name": "List-Post",
            "value": "<https://groups.google.com/a/securly.com/group/every/post>, <mailto:every@securly.com>"
          },
          {
            "name": "List-Help",
            "value": "<https://support.google.com/a/securly.com/bin/topic.py?topic=25838>, <mailto:every+help@securly.com>"
          },
          {
            "name": "List-Archive",
            "value": "<https://groups.google.com/a/securly.com/group/every/>"
          },
          {
            "name": "List-Subscribe",
            "value": "<https://groups.google.com/a/securly.com/group/every/subscribe>, <mailto:every+subscribe@securly.com>"
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "text/plain",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/plain; charset=\"utf-8\"; format=\"fixed\""
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "quoted-printable"
              }
            ],
            "body": {
              "size": 2963,
              "data": "DQoNCmh0dHBzOi8vd3d3LnNlY3VybHkuY29tP21jX2NpZD0xMTkwMGMzNDliJm1jX2VpZD1VTklRSUQNCg0KSGVsbG8gU2VjdXJseSB0ZWFtIQ0KDQpXZeKAmXJlIGhhcHB5IHRvIHNoYXJlIHRoYXQgdGhlIFBhY2thZ2UgMTMgdXBkYXRlIGZvciBGaWx0ZXIgYW5kIEF3YXJlIGlzIGNvbWluZyBpbiBsYXRlIE1heS4gU3BlY2lmaWMgaW5mb3JtYXRpb24gb24gd2hlbiB0aGlzIHBhY2thZ2UgaXMgZGVwbG95ZWQgdG8gcGFydGljdWxhciBjbHVzdGVycyB3aWxsIGJlIHB1Ymxpc2hlZCBpbiB0aGUgI3JlbGVhc2VzIGNoYW5uZWwuDQoNClBhY2thZ2UgMTMgaW5jbHVkZXMgc29tZSBtaW5vciBlbmhhbmNlbWVudHMgdG8gRmlsdGVyLCBBd2FyZSwgYW5kIG91ciBpbnRlcm5hbCBzdXBwb3J0IHRvb2wNCg0KDQoqKiBQYXJ0bmVyIFNldHVwIGluIHRoZSBTdXBwb3J0IFRvb2wNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQ0KDQpBIG5ldyBmZWF0dXJlIGluIHRoZSBTdXBwb3J0IFRvb2wgaXMgYXZhaWxhYmxlIHRoYXQgYXV0b21hdGVzIGEgdGFzayB0aGF0IHByZXZpb3VzbHkgcmVxdWlyZWQgRGV2T3BzIHN1cHBvcnQuIFRoZSBuZXcg4oCcbXVsdGktc2Nob29sIGxvZ2lu4oCdIHRhYiBhbGxvd3MgU3VwcG9ydCBhZ2VudHMgdG8gcHJvbW90ZSBhIHBhcnRuZXIgRklEIHRvIG11bHRpLXNjaG9vbCwgYXNzaWduIGN1c3RvbWVyIEZJRHMsIGFuZCBlZGl0IGFnZW50cyBkaXJlY3RseS4gVGhlIG11bHRpLXNjaG9vbCBsb2dpbiBzeXN0ZW0gcmVsaWVzIG9uIG5hbWVkIGFnZW50cyBhcyBpdCBhbGxvd3MgdGhlbSB0byBtb2NrIGFjY2VzcyB0byB0aGVpciBjdXN0b21lciBGSURzLg0KDQoNCioqIE5ldyBvcHRpb24gdG8gc2hvdyBidWxseWluZyBhY3Rpdml0eSBpbiBFbmhhbmNlZCBQcml2YWN5IE1vZGUgKEF3YXJlKQ0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQoNCkZvciBzY2hvb2xzIHVzaW5nIEVuaGFuY2VkIFByaXZhY3kgTW9kZSAoc3BlY2lmaWNhbGx5LCBzY2hvb2xzIGluIE1pbm5lc290YSwgd2hpY2ggcmVjZW50bHkgcGFzc2VkIFN0dWRlbnQgRGF0YSBQcml2YWN5IGxhdyksIHRoZXJlIGlzIGEgbmV3IG9wdGlvbiB0byBzaG93IG9ubHkgYnVsbHlpbmctcmVsYXRlZCBhY3Rpdml0eSBpbiB0aGUgYWN0aXZpdHkgZmVlZCAoaW5zdGVhZCBvZiBkaXNhYmxpbmcgaXQgZW50aXJlbHkpLCBhcyB0aGUgbGF3IGFsbG93cyBmb3Igc2Nob29scyB0byB2aWV3IHRoaXMgZGF0YSBpZiBpdCBjb25zdGl0dXRlcyBhIHRocmVhdCB0byBwaHlzaWNhbCBzYWZldHkuDQoNCg0KKiogRHVhbCBQcm92aXNpb25pbmcgZm9yIEF6dXJlIHByaW1hcnkgZG9tYWluIHNjaG9vbHMgKGZvciBGaWx0ZXIgYW5kIEF3YXJlKQ0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tDQoNCkZvciBzY2hvb2xzIHRoYXQgcmVxdWlyZSBkdWFsIHByb3Zpc2lvbmluZyAoc2Nob29scyB0aGF0IHJvc3RlciBzdHVkZW50cyBmcm9tIGJvdGggR29vZ2xlIFdvcmtzcGFjZSBhbmQgTWljcm9zb2Z0IEF6dXJlKSwgd2Ugbm93IHN1cHBvcnQgdXNpbmcgQXp1cmUgYXMgdGhlIHByaW1hcnkgZG9tYWluLg0KDQrigJQNCg0KUGxlYXNlIGRpcmVjdCBxdWVzdGlvbnMgYWJvdXQgQXdhcmUgdG8gcHJvZHVjdCBtYW5hZ2VyIFBhdWwgS2F0Y2hlciBpbiB0aGUgI3Byb2QtcXVlc3Rpb25zLWF3YXJlIGNoYW5uZWwgb24gU2xhY2suIEZvciBGaWx0ZXIsIHNlZWsgcHJvZHVjdCBtYW5hZ2VyIENyYWlnIEZlYXJuc2lkZXMgaW4gdGhlICNwcm9kLXF1ZXN0aW9ucy1maWx0ZXIgY2hhbm5lbC4NCg0KSGF2ZSBmZWVkYmFjayBhYm91dCB0aGVzZSBtYXRlcmlhbHM_DQpPciBpZGVhcyBhYm91dCBvdGhlciB3YXlzIHdlIGNhbiBiZXR0ZXIgc3VwcG9ydCB5b3U_DQoNClBsZWFzZSByZWFjaCBvdXQgdG8gSnVsaWUgV2l0aHJvdyBhdCBqdWxpZS53aXRocm93QHNlY3VybHkuY29tIChtYWlsdG86anVsaWUud2l0aHJvd0BzZWN1cmx5LmNvbSkgLg0KT3IgU2xhY2sgaWYgeW91IG11c3QsIGJ1dCB0cnVzdCB1cywgZW1haWwgaXMgYmV0dGVyIGZvciB0aGlzLg0KDQo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0NCg0KDQoqKiBTZWN1cmx5IChodHRwczovL3d3dy5zZWN1cmx5LmNvbS8_bWNfY2lkPTExOTAwYzM0OWImbWNfZWlkPVVOSVFJRCkNCg0KDQpTZWN1cmx5IGlzIHRoZSB3aG9sZS1zdHVkZW50IHN1Y2Nlc3MgcGxhdGZvcm0gZGV2ZWxvcGVkIHNwZWNpZmljYWxseSBmb3IgdGhlIG5lZWRzIG9mIHRvZGF54oCZcyBLLTEyIHNjaG9vbHMuDQoNCioqIHNhbGVzQHNlY3VybHkuY29tIChtYWlsdG86c2FsZXNAc2VjdXJseS5jb20pDQp8ICAgIDEtODU1LVNFQ1VSTFkgICAgfCAgICAqKiB3d3cuc2VjdXJseS5jb20gKGh0dHA6Ly93d3cuc2VjdXJseS5jb20_bWNfY2lkPTExOTAwYzM0OWImbWNfZWlkPVVOSVFJRCkNCg0KKiogRmFjZWJvb2sgKGh0dHA6Ly9mYWNlYm9vay5jb20vc2VjdXJseWluYz9tY19jaWQ9MTE5MDBjMzQ5YiZtY19laWQ9VU5JUUlEKQ0KKiogVHdpdHRlciAoaHR0cDovL3R3aXR0ZXIuY29tL3NlY3VybHk_bWNfY2lkPTExOTAwYzM0OWImbWNfZWlkPVVOSVFJRCkNCioqIEluc3RhZ3JhbSAoaHR0cDovL2luc3RhZ3JhbS5jb20vc2VjdXJseWluYy8_bWNfY2lkPTExOTAwYzM0OWImbWNfZWlkPVVOSVFJRCkNCioqIEVtYWlsIChtYWlsdG86c2FsZXNAc2VjdXJseS5jb20pDQoNCioqIFVuc3Vic2NyaWJlIChodHRwczovL3NlY3VybHkudXMxMy5saXN0LW1hbmFnZS5jb20vdW5zdWJzY3JpYmU_dT1lNjljMjMxYTI4MDQ1Y2IxMGVlN2Q4YzEyJmlkPTA3ZTRkOTgxNzAmZT00ZTFlZjM2ZTA1JmM9MTE5MDBjMzQ5Yik="
            }
          },
          {
            "partId": "1",
            "mimeType": "text/html",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/html; charset=\"utf-8\""
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "quoted-printable"
              }
            ],
            "body": {
              "size": 55825,
              "data": "PCFkb2N0eXBlIGh0bWw-DQo8aHRtbCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgeG1sbnM6dj0idXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWwiIHhtbG5zOm89InVybjpzY2hlbWFzLW1pY3Jvc29mdC1jb206b2ZmaWNlOm9mZmljZSIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O3BhZGRpbmc6IDAgIWltcG9ydGFudDtoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDt3aWR0aDogMTAwJSAhaW1wb3J0YW50OyI-DQogICAgPGhlYWQgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICA8IS0tIE5BTUU6IDEgQ09MVU1OIC0tPg0KICAgICAgICA8IS0tW2lmIGd0ZSBtc28gMTVdPg0KICAgICAgICA8eG1sPg0KICAgICAgICAgICAgPG86T2ZmaWNlRG9jdW1lbnRTZXR0aW5ncz4NCiAgICAgICAgICAgIDxvOkFsbG93UE5HLz4NCiAgICAgICAgICAgIDxvOlBpeGVsc1BlckluY2g-OTY8L286UGl4ZWxzUGVySW5jaD4NCiAgICAgICAgICAgIDwvbzpPZmZpY2VEb2N1bWVudFNldHRpbmdzPg0KICAgICAgICA8L3htbD4NCiAgICAgICAgPCFbZW5kaWZdLS0-DQogICAgICAgIDxtZXRhIGNoYXJzZXQ9IlVURi04IiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQogICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgPHRpdGxlIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij5TYWZldHkgQ29uc29sZSBQYWNrYWdlIDEzLCBjb21pbmcgTWF5IDIwMjwvdGl0bGU-DQoNCiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCgkJcHsNCgkJCW1hcmdpbjoxMHB4IDA7DQoJCQlwYWRkaW5nOjA7DQoJCX0NCgkJdGFibGV7DQoJCQlib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7DQoJCX0NCgkJaDEsaDIsaDMsaDQsaDUsaDZ7DQoJCQlkaXNwbGF5OmJsb2NrOw0KCQkJbWFyZ2luOjA7DQoJCQlwYWRkaW5nOjA7DQoJCX0NCgkJaW1nLGEgaW1new0KCQkJYm9yZGVyOjA7DQoJCQloZWlnaHQ6YXV0bzsNCgkJCW91dGxpbmU6bm9uZTsNCgkJCXRleHQtZGVjb3JhdGlvbjpub25lOw0KCQl9DQoJCWJvZHksI2JvZHlUYWJsZSwjYm9keUNlbGx7DQoJCQloZWlnaHQ6MTAwJTsNCgkJCW1hcmdpbjowOw0KCQkJcGFkZGluZzowOw0KCQkJd2lkdGg6MTAwJTsNCgkJfQ0KCQkubWNuUHJldmlld1RleHR7DQoJCQlkaXNwbGF5Om5vbmUgIWltcG9ydGFudDsNCgkJfQ0KCQkjb3V0bG9vayBhew0KCQkJcGFkZGluZzowOw0KCQl9DQoJCWltZ3sNCgkJCS1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6YmljdWJpYzsNCgkJfQ0KCQl0YWJsZXsNCgkJCW1zby10YWJsZS1sc3BhY2U6MHB0Ow0KCQkJbXNvLXRhYmxlLXJzcGFjZTowcHQ7DQoJCX0NCgkJLlJlYWRNc2dCb2R5ew0KCQkJd2lkdGg6MTAwJTsNCgkJfQ0KCQkuRXh0ZXJuYWxDbGFzc3sNCgkJCXdpZHRoOjEwMCU7DQoJCX0NCgkJcCxhLGxpLHRkLGJsb2NrcXVvdGV7DQoJCQltc28tbGluZS1oZWlnaHQtcnVsZTpleGFjdGx5Ow0KCQl9DQoJCWFbaHJlZl49dGVsXSxhW2hyZWZePXNtc117DQoJCQljb2xvcjppbmhlcml0Ow0KCQkJY3Vyc29yOmRlZmF1bHQ7DQoJCQl0ZXh0LWRlY29yYXRpb246bm9uZTsNCgkJfQ0KCQlwLGEsbGksdGQsYm9keSx0YWJsZSxibG9ja3F1b3Rlew0KCQkJLW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTsNCgkJCS13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOw0KCQl9DQoJCS5FeHRlcm5hbENsYXNzLC5FeHRlcm5hbENsYXNzIHAsLkV4dGVybmFsQ2xhc3MgdGQsLkV4dGVybmFsQ2xhc3MgZGl2LC5FeHRlcm5hbENsYXNzIHNwYW4sLkV4dGVybmFsQ2xhc3MgZm9udHsNCgkJCWxpbmUtaGVpZ2h0OjEwMCU7DQoJCX0NCgkJYVt4LWFwcGxlLWRhdGEtZGV0ZWN0b3JzXXsNCgkJCWNvbG9yOmluaGVyaXQgIWltcG9ydGFudDsNCgkJCXRleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnQ7DQoJCQlmb250LXNpemU6aW5oZXJpdCAhaW1wb3J0YW50Ow0KCQkJZm9udC1mYW1pbHk6aW5oZXJpdCAhaW1wb3J0YW50Ow0KCQkJZm9udC13ZWlnaHQ6aW5oZXJpdCAhaW1wb3J0YW50Ow0KCQkJbGluZS1oZWlnaHQ6aW5oZXJpdCAhaW1wb3J0YW50Ow0KCQl9DQoJCSNib2R5Q2VsbHsNCgkJCXBhZGRpbmc6MTBweDsNCgkJfQ0KCQkudGVtcGxhdGVDb250YWluZXJ7DQoJCQltYXgtd2lkdGg6NjAwcHggIWltcG9ydGFudDsNCgkJfQ0KCQlhLm1jbkJ1dHRvbnsNCgkJCWRpc3BsYXk6YmxvY2s7DQoJCX0NCgkJLm1jbkltYWdlLC5tY25SZXRpbmFJbWFnZXsNCgkJCXZlcnRpY2FsLWFsaWduOmJvdHRvbTsNCgkJfQ0KCQkubWNuVGV4dENvbnRlbnR7DQoJCQl3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7DQoJCX0NCgkJLm1jblRleHRDb250ZW50IGltZ3sNCgkJCWhlaWdodDphdXRvICFpbXBvcnRhbnQ7DQoJCX0NCgkJLm1jbkRpdmlkZXJCbG9ja3sNCgkJCXRhYmxlLWxheW91dDpmaXhlZCAhaW1wb3J0YW50Ow0KCQl9DQoJCWJvZHksI2JvZHlUYWJsZXsNCgkJCWJhY2tncm91bmQtY29sb3I6I2VkZjNmYTsNCgkJfQ0KCQkjYm9keUNlbGx7DQoJCQlib3JkZXItdG9wOjA7DQoJCX0NCgkJLnRlbXBsYXRlQ29udGFpbmVyew0KCQkJYm9yZGVyOjA7DQoJCX0NCgkJaDF7DQoJCQljb2xvcjojMjAyMDIwOw0KCQkJZm9udC1mYW1pbHk6SGVsdmV0aWNhOw0KCQkJZm9udC1zaXplOjI2cHg7DQoJCQlmb250LXN0eWxlOm5vcm1hbDsNCgkJCWZvbnQtd2VpZ2h0OmJvbGQ7DQoJCQlsaW5lLWhlaWdodDoxMjUlOw0KCQkJbGV0dGVyLXNwYWNpbmc6bm9ybWFsOw0KCQkJdGV4dC1hbGlnbjpsZWZ0Ow0KCQl9DQoJCWgyew0KCQkJY29sb3I6IzIwMjAyMDsNCgkJCWZvbnQtZmFtaWx5OkhlbHZldGljYTsNCgkJCWZvbnQtc2l6ZToyMnB4Ow0KCQkJZm9udC1zdHlsZTpub3JtYWw7DQoJCQlmb250LXdlaWdodDpib2xkOw0KCQkJbGluZS1oZWlnaHQ6MTI1JTsNCgkJCWxldHRlci1zcGFjaW5nOm5vcm1hbDsNCgkJCXRleHQtYWxpZ246bGVmdDsNCgkJfQ0KCQloM3sNCgkJCWNvbG9yOiMyMDIwMjA7DQoJCQlmb250LWZhbWlseTpIZWx2ZXRpY2E7DQoJCQlmb250LXNpemU6MjBweDsNCgkJCWZvbnQtc3R5bGU6bm9ybWFsOw0KCQkJZm9udC13ZWlnaHQ6Ym9sZDsNCgkJCWxpbmUtaGVpZ2h0OjEyNSU7DQoJCQlsZXR0ZXItc3BhY2luZzpub3JtYWw7DQoJCQl0ZXh0LWFsaWduOmxlZnQ7DQoJCX0NCgkJaDR7DQoJCQljb2xvcjojMjAyMDIwOw0KCQkJZm9udC1mYW1pbHk6SGVsdmV0aWNhOw0KCQkJZm9udC1zaXplOjE4cHg7DQoJCQlmb250LXN0eWxlOm5vcm1hbDsNCgkJCWZvbnQtd2VpZ2h0OmJvbGQ7DQoJCQlsaW5lLWhlaWdodDoxMjUlOw0KCQkJbGV0dGVyLXNwYWNpbmc6bm9ybWFsOw0KCQkJdGV4dC1hbGlnbjpsZWZ0Ow0KCQl9DQoJCSN0ZW1wbGF0ZVByZWhlYWRlcnsNCgkJCWJhY2tncm91bmQtY29sb3I6I2VkZjNmYTsNCgkJCWJhY2tncm91bmQtaW1hZ2U6bm9uZTsNCgkJCWJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDsNCgkJCWJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOw0KCQkJYmFja2dyb3VuZC1zaXplOmNvdmVyOw0KCQkJYm9yZGVyLXRvcDowOw0KCQkJYm9yZGVyLWJvdHRvbTowOw0KCQkJcGFkZGluZy10b3A6OXB4Ow0KCQkJcGFkZGluZy1ib3R0b206OXB4Ow0KCQl9DQoJCSN0ZW1wbGF0ZVByZWhlYWRlciAubWNuVGV4dENvbnRlbnQsI3RlbXBsYXRlUHJlaGVhZGVyIC5tY25UZXh0Q29udGVudCBwew0KCQkJY29sb3I6IzY1NjU2NTsNCgkJCWZvbnQtZmFtaWx5OkhlbHZldGljYTsNCgkJCWZvbnQtc2l6ZToxMnB4Ow0KCQkJbGluZS1oZWlnaHQ6MTUwJTsNCgkJCXRleHQtYWxpZ246bGVmdDsNCgkJfQ0KCQkjdGVtcGxhdGVQcmVoZWFkZXIgLm1jblRleHRDb250ZW50IGEsI3RlbXBsYXRlUHJlaGVhZGVyIC5tY25UZXh0Q29udGVudCBwIGF7DQoJCQljb2xvcjojNjU2NTY1Ow0KCQkJZm9udC13ZWlnaHQ6bm9ybWFsOw0KCQkJdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsNCgkJfQ0KCQkjdGVtcGxhdGVIZWFkZXJ7DQoJCQliYWNrZ3JvdW5kLWNvbG9yOiN0cmFuc3BhcmVudDsNCgkJCWJhY2tncm91bmQtaW1hZ2U6bm9uZTsNCgkJCWJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDsNCgkJCWJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOw0KCQkJYmFja2dyb3VuZC1zaXplOmNvdmVyOw0KCQkJYm9yZGVyLXRvcDowOw0KCQkJYm9yZGVyLWJvdHRvbTowOw0KCQkJcGFkZGluZy10b3A6MHB4Ow0KCQkJcGFkZGluZy1ib3R0b206NXB4Ow0KCQl9DQoJCSN0ZW1wbGF0ZUhlYWRlciAubWNuVGV4dENvbnRlbnQsI3RlbXBsYXRlSGVhZGVyIC5tY25UZXh0Q29udGVudCBwew0KCQkJY29sb3I6IzIwMjAyMDsNCgkJCWZvbnQtZmFtaWx5OkhlbHZldGljYTsNCgkJCWZvbnQtc2l6ZToxNnB4Ow0KCQkJbGluZS1oZWlnaHQ6MTAwJTsNCgkJCXRleHQtYWxpZ246bGVmdDsNCgkJfQ0KCQkjdGVtcGxhdGVIZWFkZXIgLm1jblRleHRDb250ZW50IGEsI3RlbXBsYXRlSGVhZGVyIC5tY25UZXh0Q29udGVudCBwIGF7DQoJCQljb2xvcjojMDA3Qzg5Ow0KCQkJZm9udC13ZWlnaHQ6bm9ybWFsOw0KCQkJdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsNCgkJfQ0KCQkjdGVtcGxhdGVCb2R5ew0KCQkJYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmOw0KCQkJYmFja2dyb3VuZC1pbWFnZTpub25lOw0KCQkJYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0Ow0KCQkJYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7DQoJCQliYWNrZ3JvdW5kLXNpemU6Y292ZXI7DQoJCQlib3JkZXItdG9wOjA7DQoJCQlib3JkZXItYm90dG9tOjJweCBub25lICNFQUVBRUE7DQoJCQlwYWRkaW5nLXRvcDowcHg7DQoJCQlwYWRkaW5nLWJvdHRvbTowcHg7DQoJCX0NCgkJI3RlbXBsYXRlQm9keSAubWNuVGV4dENvbnRlbnQsI3RlbXBsYXRlQm9keSAubWNuVGV4dENvbnRlbnQgcHsNCgkJCWNvbG9yOiMxNzFiMWY7DQoJCQlmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBWZXJkYW5hLCBzYW5zLXNlcmlmOw0KCQkJZm9udC1zaXplOjE2cHg7DQoJCQlsaW5lLWhlaWdodDoxMjUlOw0KCQkJdGV4dC1hbGlnbjpsZWZ0Ow0KCQl9DQoJCSN0ZW1wbGF0ZUJvZHkgLm1jblRleHRDb250ZW50IGEsI3RlbXBsYXRlQm9keSAubWNuVGV4dENvbnRlbnQgcCBhew0KCQkJY29sb3I6IzAwNWViODsNCgkJCWZvbnQtd2VpZ2h0Om5vcm1hbDsNCgkJCXRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7DQoJCX0NCgkJI3RlbXBsYXRlRm9vdGVyew0KCQkJYmFja2dyb3VuZC1jb2xvcjojdHJhbnNwYXJlbnQ7DQoJCQliYWNrZ3JvdW5kLWltYWdlOm5vbmU7DQoJCQliYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7DQoJCQliYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsNCgkJCWJhY2tncm91bmQtc2l6ZTpjb3ZlcjsNCgkJCWJvcmRlci10b3A6MDsNCgkJCWJvcmRlci1ib3R0b206MDsNCgkJCXBhZGRpbmctdG9wOjBweDsNCgkJCXBhZGRpbmctYm90dG9tOjBweDsNCgkJfQ0KCQkjdGVtcGxhdGVGb290ZXIgLm1jblRleHRDb250ZW50LCN0ZW1wbGF0ZUZvb3RlciAubWNuVGV4dENvbnRlbnQgcHsNCgkJCWNvbG9yOiM2NTY1NjU7DQoJCQlmb250LWZhbWlseTpIZWx2ZXRpY2E7DQoJCQlmb250LXNpemU6MTJweDsNCgkJCWxpbmUtaGVpZ2h0OjE1MCU7DQoJCQl0ZXh0LWFsaWduOmNlbnRlcjsNCgkJfQ0KCQkjdGVtcGxhdGVGb290ZXIgLm1jblRleHRDb250ZW50IGEsI3RlbXBsYXRlRm9vdGVyIC5tY25UZXh0Q29udGVudCBwIGF7DQoJCQljb2xvcjojNjU2NTY1Ow0KCQkJZm9udC13ZWlnaHQ6bm9ybWFsOw0KCQkJdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsNCgkJfQ0KCUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7DQoJCS50ZW1wbGF0ZUNvbnRhaW5lcnsNCgkJCXdpZHRoOjYwMHB4ICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJYm9keSx0YWJsZSx0ZCxwLGEsbGksYmxvY2txdW90ZXsNCgkJCS13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJYm9keXsNCgkJCXdpZHRoOjEwMCUgIWltcG9ydGFudDsNCgkJCW1pbi13aWR0aDoxMDAlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJLm1jblJldGluYUltYWdlew0KCQkJbWF4LXdpZHRoOjEwMCUgIWltcG9ydGFudDsNCgkJfQ0KDQp9CUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpew0KCQkubWNuSW1hZ2V7DQoJCQl3aWR0aDoxMDAlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJLm1jbkNhcnRDb250YWluZXIsLm1jbkNhcHRpb25Ub3BDb250ZW50LC5tY25SZWNDb250ZW50Q29udGFpbmVyLC5tY25DYXB0aW9uQm90dG9tQ29udGVudCwubWNuVGV4dENvbnRlbnRDb250YWluZXIsLm1jbkJveGVkVGV4dENvbnRlbnRDb250YWluZXIsLm1jbkltYWdlR3JvdXBDb250ZW50Q29udGFpbmVyLC5tY25DYXB0aW9uTGVmdFRleHRDb250ZW50Q29udGFpbmVyLC5tY25DYXB0aW9uUmlnaHRUZXh0Q29udGVudENvbnRhaW5lciwubWNuQ2FwdGlvbkxlZnRJbWFnZUNvbnRlbnRDb250YWluZXIsLm1jbkNhcHRpb25SaWdodEltYWdlQ29udGVudENvbnRhaW5lciwubWNuSW1hZ2VDYXJkTGVmdFRleHRDb250ZW50Q29udGFpbmVyLC5tY25JbWFnZUNhcmRSaWdodFRleHRDb250ZW50Q29udGFpbmVyLC5tY25JbWFnZUNhcmRMZWZ0SW1hZ2VDb250ZW50Q29udGFpbmVyLC5tY25JbWFnZUNhcmRSaWdodEltYWdlQ29udGVudENvbnRhaW5lcnsNCgkJCW1heC13aWR0aDoxMDAlICFpbXBvcnRhbnQ7DQoJCQl3aWR0aDoxMDAlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJLm1jbkJveGVkVGV4dENvbnRlbnRDb250YWluZXJ7DQoJCQltaW4td2lkdGg6MTAwJSAhaW1wb3J0YW50Ow0KCQl9DQoNCn0JQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7DQoJCS5tY25JbWFnZUdyb3VwQ29udGVudHsNCgkJCXBhZGRpbmc6OXB4ICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJLm1jbkNhcHRpb25MZWZ0Q29udGVudE91dGVyIC5tY25UZXh0Q29udGVudCwubWNuQ2FwdGlvblJpZ2h0Q29udGVudE91dGVyIC5tY25UZXh0Q29udGVudHsNCgkJCXBhZGRpbmctdG9wOjlweCAhaW1wb3J0YW50Ow0KCQl9DQoNCn0JQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7DQoJCS5tY25JbWFnZUNhcmRUb3BJbWFnZUNvbnRlbnQsLm1jbkNhcHRpb25Cb3R0b21Db250ZW50Omxhc3QtY2hpbGQgLm1jbkNhcHRpb25Cb3R0b21JbWFnZUNvbnRlbnQsLm1jbkNhcHRpb25CbG9ja0lubmVyIC5tY25DYXB0aW9uVG9wQ29udGVudDpsYXN0LWNoaWxkIC5tY25UZXh0Q29udGVudHsNCgkJCXBhZGRpbmctdG9wOjE4cHggIWltcG9ydGFudDsNCgkJfQ0KDQp9CUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpew0KCQkubWNuSW1hZ2VDYXJkQm90dG9tSW1hZ2VDb250ZW50ew0KCQkJcGFkZGluZy1ib3R0b206OXB4ICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJLm1jbkltYWdlR3JvdXBCbG9ja0lubmVyew0KCQkJcGFkZGluZy10b3A6MCAhaW1wb3J0YW50Ow0KCQkJcGFkZGluZy1ib3R0b206MCAhaW1wb3J0YW50Ow0KCQl9DQoNCn0JQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7DQoJCS5tY25JbWFnZUdyb3VwQmxvY2tPdXRlcnsNCgkJCXBhZGRpbmctdG9wOjlweCAhaW1wb3J0YW50Ow0KCQkJcGFkZGluZy1ib3R0b206OXB4ICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJLm1jblRleHRDb250ZW50LC5tY25Cb3hlZFRleHRDb250ZW50Q29sdW1uew0KCQkJcGFkZGluZy1yaWdodDoxOHB4ICFpbXBvcnRhbnQ7DQoJCQlwYWRkaW5nLWxlZnQ6MThweCAhaW1wb3J0YW50Ow0KCQl9DQoNCn0JQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7DQoJCS5tY25JbWFnZUNhcmRMZWZ0SW1hZ2VDb250ZW50LC5tY25JbWFnZUNhcmRSaWdodEltYWdlQ29udGVudHsNCgkJCXBhZGRpbmctcmlnaHQ6MThweCAhaW1wb3J0YW50Ow0KCQkJcGFkZGluZy1ib3R0b206MCAhaW1wb3J0YW50Ow0KCQkJcGFkZGluZy1sZWZ0OjE4cHggIWltcG9ydGFudDsNCgkJfQ0KDQp9CUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpew0KCQkubWNwcmV2aWV3LWltYWdlLXVwbG9hZGVyew0KCQkJZGlzcGxheTpub25lICFpbXBvcnRhbnQ7DQoJCQl3aWR0aDoxMDAlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJaDF7DQoJCQlmb250LXNpemU6MjJweCAhaW1wb3J0YW50Ow0KCQkJbGluZS1oZWlnaHQ6MTI1JSAhaW1wb3J0YW50Ow0KCQl9DQoNCn0JQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7DQoJCWgyew0KCQkJZm9udC1zaXplOjIwcHggIWltcG9ydGFudDsNCgkJCWxpbmUtaGVpZ2h0OjEyNSUgIWltcG9ydGFudDsNCgkJfQ0KDQp9CUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpew0KCQloM3sNCgkJCWZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7DQoJCQlsaW5lLWhlaWdodDoxMjUlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJaDR7DQoJCQlmb250LXNpemU6MTZweCAhaW1wb3J0YW50Ow0KCQkJbGluZS1oZWlnaHQ6MTUwJSAhaW1wb3J0YW50Ow0KCQl9DQoNCn0JQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7DQoJCS5tY25Cb3hlZFRleHRDb250ZW50Q29udGFpbmVyIC5tY25UZXh0Q29udGVudCwubWNuQm94ZWRUZXh0Q29udGVudENvbnRhaW5lciAubWNuVGV4dENvbnRlbnQgcHsNCgkJCWZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7DQoJCQlsaW5lLWhlaWdodDoxNTAlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJI3RlbXBsYXRlUHJlaGVhZGVyew0KCQkJZGlzcGxheTpibG9jayAhaW1wb3J0YW50Ow0KCQl9DQoNCn0JQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7DQoJCSN0ZW1wbGF0ZVByZWhlYWRlciAubWNuVGV4dENvbnRlbnQsI3RlbXBsYXRlUHJlaGVhZGVyIC5tY25UZXh0Q29udGVudCBwew0KCQkJZm9udC1zaXplOjE0cHggIWltcG9ydGFudDsNCgkJCWxpbmUtaGVpZ2h0OjE1MCUgIWltcG9ydGFudDsNCgkJfQ0KDQp9CUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpew0KCQkjdGVtcGxhdGVIZWFkZXIgLm1jblRleHRDb250ZW50LCN0ZW1wbGF0ZUhlYWRlciAubWNuVGV4dENvbnRlbnQgcHsNCgkJCWZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7DQoJCQlsaW5lLWhlaWdodDoxNTAlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJI3RlbXBsYXRlQm9keSAubWNuVGV4dENvbnRlbnQsI3RlbXBsYXRlQm9keSAubWNuVGV4dENvbnRlbnQgcHsNCgkJCWZvbnQtc2l6ZToxNnB4ICFpbXBvcnRhbnQ7DQoJCQlsaW5lLWhlaWdodDoxNTAlICFpbXBvcnRhbnQ7DQoJCX0NCg0KfQlAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXsNCgkJI3RlbXBsYXRlRm9vdGVyIC5tY25UZXh0Q29udGVudCwjdGVtcGxhdGVGb290ZXIgLm1jblRleHRDb250ZW50IHB7DQoJCQlmb250LXNpemU6MTRweCAhaW1wb3J0YW50Ow0KCQkJbGluZS1oZWlnaHQ6MTUwJSAhaW1wb3J0YW50Ow0KCQl9DQoNCn08L3N0eWxlPjwvaGVhZD4NCiAgICA8Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2hlaWdodDogMTAwJSAhaW1wb3J0YW50O21hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7cGFkZGluZzogMCAhaW1wb3J0YW50O3dpZHRoOiAxMDAlICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjogI2VkZjNmYTsiPg0KICAgICAgICA8IS0tDQotLT4NCiAgICAgICAgPGNlbnRlciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQogICAgICAgICAgICA8dGFibGUgYWxpZ249ImNlbnRlciIgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJib2R5VGFibGUiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O2hlaWdodDogMTAwJTttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O3BhZGRpbmc6IDA7d2lkdGg6IDEwMCU7YmFja2dyb3VuZC1jb2xvcjogI2VkZjNmYTtib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50O3RhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDsiPg0KICAgICAgICAgICAgICAgIDx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQogICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj0iY2VudGVyIiB2YWxpZ249InRvcCIgaWQ9ImJvZHlDZWxsIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O2hlaWdodDogMTAwJTttYXJnaW46IDA7cGFkZGluZzogMTBweDt3aWR0aDogMTAwJTtib3JkZXItdG9wOiAwO21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-DQogICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEJFR0lOIFRFTVBMQVRFIC8vIC0tPg0KICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVtpZiAoZ3RlIG1zbyA5KXwoSUUpXT4NCiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgd2lkdGg9IjYwMCIgc3R5bGU9IndpZHRoOjYwMHB4OyI-DQogICAgICAgICAgICAgICAgICAgICAgICA8dHI-DQogICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249ImNlbnRlciIgdmFsaWduPSJ0b3AiIHdpZHRoPSI2MDAiIHN0eWxlPSJ3aWR0aDo2MDBweDsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPCFbZW5kaWZdLS0-DQogICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiBjbGFzcz0idGVtcGxhdGVDb250YWluZXIiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O2JvcmRlcjogMDtib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50O3RhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O21heC13aWR0aDogNjAwcHggIWltcG9ydGFudDsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2YWxpZ249InRvcCIgaWQ9InRlbXBsYXRlUHJlaGVhZGVyIiBzdHlsZT0iYmFja2dyb3VuZDojZWRmM2ZhIG5vbmUgbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7YmFja2dyb3VuZC1jb2xvcjogI2VkZjNmYTtiYWNrZ3JvdW5kLWltYWdlOiBub25lO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2JhY2tncm91bmQtc2l6ZTogY292ZXI7Ym9yZGVyLXRvcDogMDtib3JkZXItYm90dG9tOiAwO3BhZGRpbmctdG9wOiA5cHg7cGFkZGluZy1ib3R0b206IDlweDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPjwvdGQ-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdmFsaWduPSJ0b3AiIGlkPSJ0ZW1wbGF0ZUhlYWRlciIgc3R5bGU9ImJhY2tncm91bmQ6I3RyYW5zcGFyZW50IG5vbmUgbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7YmFja2dyb3VuZC1jb2xvcjogI3RyYW5zcGFyZW50O2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtib3JkZXItdG9wOiAwO2JvcmRlci1ib3R0b206IDA7cGFkZGluZy10b3A6IDBweDtwYWRkaW5nLWJvdHRvbTogNXB4O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-PHRhYmxlIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgY2xhc3M9Im1jbkltYWdlQmxvY2siIHN0eWxlPSJtaW4td2lkdGg6IDEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQogICAgPHRib2R5IGNsYXNzPSJtY25JbWFnZUJsb2NrT3V0ZXIiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgICAgIDx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQogICAgICAgICAgICAgICAgPHRkIHZhbGlnbj0idG9wIiBzdHlsZT0icGFkZGluZzogOXB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiIGNsYXNzPSJtY25JbWFnZUJsb2NrSW5uZXIiPg0KICAgICAgICAgICAgICAgICAgICA8dGFibGUgYWxpZ249ImxlZnQiIHdpZHRoPSIxMDAlIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9Im1jbkltYWdlQ29udGVudENvbnRhaW5lciIgc3R5bGU9Im1pbi13aWR0aDogMTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O3RhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50O21hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-PHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9Im1jbkltYWdlQ29udGVudCIgdmFsaWduPSJ0b3AiIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OiA5cHg7cGFkZGluZy1sZWZ0OiA5cHg7cGFkZGluZy10b3A6IDA7cGFkZGluZy1ib3R0b206IDA7dGV4dC1hbGlnbjogY2VudGVyOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSJodHRwczovL3NlY3VybHkudXMxMy5saXN0LW1hbmFnZS5jb20vdHJhY2svY2xpY2s_dT1lNjljMjMxYTI4MDQ1Y2IxMGVlN2Q4YzEyJmlkPThkNjY3MWI5NzAmZT00ZTFlZjM2ZTA1IiB0aXRsZT0iIiBjbGFzcz0iIiB0YXJnZXQ9Il9ibGFuayIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWxpZ249ImNlbnRlciIgYWx0PSIiIHNyYz0iaHR0cHM6Ly9tY3VzZXJjb250ZW50LmNvbS9lNjljMjMxYTI4MDQ1Y2IxMGVlN2Q4YzEyL2ltYWdlcy9jNWZkYzhjYy05ODVlLTRlMTUtYWU1My0wN2FlYTRjMzcwM2UucG5nIiB3aWR0aD0iMTIzIiBzdHlsZT0ibWF4LXdpZHRoOiAxMjNweDtwYWRkaW5nLWJvdHRvbTogMHB4O3ZlcnRpY2FsLWFsaWduOiBib3R0b207ZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlcjogMDtoZWlnaHQ6IGF1dG87b3V0bGluZTogbm9uZTt0ZXh0LWRlY29yYXRpb246IG5vbmU7LW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsiIGNsYXNzPSJtY25JbWFnZSI-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E-DQoNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT48L3RhYmxlPg0KICAgICAgICAgICAgICAgIDwvdGQ-DQogICAgICAgICAgICA8L3RyPg0KICAgIDwvdGJvZHk-DQo8L3RhYmxlPjwvdGQ-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdmFsaWduPSJ0b3AiIGlkPSJ0ZW1wbGF0ZUJvZHkiIHN0eWxlPSJiYWNrZ3JvdW5kOiNmZmZmZmYgbm9uZSBuby1yZXBlYXQgY2VudGVyL2NvdmVyOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO2JhY2tncm91bmQtaW1hZ2U6IG5vbmU7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtib3JkZXItdG9wOiAwO2JvcmRlci1ib3R0b206IDJweCBub25lICNFQUVBRUE7cGFkZGluZy10b3A6IDBweDtwYWRkaW5nLWJvdHRvbTogMHB4O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-PHRhYmxlIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgY2xhc3M9Im1jbkltYWdlQmxvY2siIHN0eWxlPSJtaW4td2lkdGg6IDEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQogICAgPHRib2R5IGNsYXNzPSJtY25JbWFnZUJsb2NrT3V0ZXIiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgICAgIDx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQogICAgICAgICAgICAgICAgPHRkIHZhbGlnbj0idG9wIiBzdHlsZT0icGFkZGluZzogMHB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiIGNsYXNzPSJtY25JbWFnZUJsb2NrSW5uZXIiPg0KICAgICAgICAgICAgICAgICAgICA8dGFibGUgYWxpZ249ImxlZnQiIHdpZHRoPSIxMDAlIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9Im1jbkltYWdlQ29udGVudENvbnRhaW5lciIgc3R5bGU9Im1pbi13aWR0aDogMTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O3RhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50O21hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-PHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9Im1jbkltYWdlQ29udGVudCIgdmFsaWduPSJ0b3AiIHN0eWxlPSJwYWRkaW5nLXJpZ2h0OiAwcHg7cGFkZGluZy1sZWZ0OiAwcHg7cGFkZGluZy10b3A6IDA7cGFkZGluZy1ib3R0b206IDA7dGV4dC1hbGlnbjogY2VudGVyOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KDQoNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsaWduPSJjZW50ZXIiIGFsdD0iIiBzcmM9Imh0dHBzOi8vbWN1c2VyY29udGVudC5jb20vZTY5YzIzMWEyODA0NWNiMTBlZTdkOGMxMi9pbWFnZXMvYmFmZGMyZmYtNTZjYy05YmQzLTEzNGUtOGRhODc2MDliMjRmLmdpZiIgd2lkdGg9IjYwMCIgc3R5bGU9Im1heC13aWR0aDogNjAwcHg7cGFkZGluZy1ib3R0b206IDA7ZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7dmVydGljYWwtYWxpZ246IGJvdHRvbTstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyOiAwO2hlaWdodDogYXV0bztvdXRsaW5lOiBub25lO3RleHQtZGVjb3JhdGlvbjogbm9uZTstbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyIgY2xhc3M9Im1jbkltYWdlIj4NCg0KDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI-DQogICAgICAgICAgICAgICAgICAgIDwvdGJvZHk-PC90YWJsZT4NCiAgICAgICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgPC90cj4NCiAgICA8L3Rib2R5Pg0KPC90YWJsZT48dGFibGUgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiBjbGFzcz0ibWNuQm94ZWRUZXh0QmxvY2siIHN0eWxlPSJtaW4td2lkdGg6IDEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQogICAgPCEtLVtpZiBndGUgbXNvIDldPg0KCTx0YWJsZSBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgd2lkdGg9IjEwMCUiPg0KCTwhW2VuZGlmXS0tPg0KCTx0Ym9keSBjbGFzcz0ibWNuQm94ZWRUZXh0QmxvY2tPdXRlciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICA8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICAgICAgPHRkIHZhbGlnbj0idG9wIiBjbGFzcz0ibWNuQm94ZWRUZXh0QmxvY2tJbm5lciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KDQoJCQkJPCEtLVtpZiBndGUgbXNvIDldPg0KCQkJCTx0ZCBhbGlnbj0iY2VudGVyIiB2YWxpZ249InRvcCIgIj4NCgkJCQk8IVtlbmRpZl0tLT4NCiAgICAgICAgICAgICAgICA8dGFibGUgYWxpZ249ImxlZnQiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9Im1pbi13aWR0aDogMTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O3RhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50O21hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7IiBjbGFzcz0ibWNuQm94ZWRUZXh0Q29udGVudENvbnRhaW5lciI-DQogICAgICAgICAgICAgICAgICAgIDx0Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-PHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCg0KICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPSJwYWRkaW5nLXRvcDogOXB4O3BhZGRpbmctbGVmdDogMThweDtwYWRkaW5nLWJvdHRvbTogOXB4O3BhZGRpbmctcmlnaHQ6IDE4cHg7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-DQoNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9Im1jblRleHRDb250ZW50Q29udGFpbmVyIiB3aWR0aD0iMTAwJSIgc3R5bGU9Im1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-PHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2YWxpZ249InRvcCIgY2xhc3M9Im1jblRleHRDb250ZW50IiBzdHlsZT0icGFkZGluZzogMThweDtjb2xvcjogIzIyMjIyMjtmb250LWZhbWlseTogSGVsdmV0aWNhO2ZvbnQtc2l6ZTogMTNweDtmb250LXN0eWxlOiBub3JtYWw7Zm9udC13ZWlnaHQ6IG5vcm1hbDtsaW5lLWhlaWdodDogMTUwJTt0ZXh0LWFsaWduOiBsZWZ0Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTt3b3JkLWJyZWFrOiBicmVhay13b3JkO21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O3BhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDogIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDogIWltcG9ydGFudDsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRpcj0ibHRyIiBzdHlsZT0iY29sb3I6ICMyMjIyMjI7Zm9udC1mYW1pbHk6IEhlbHZldGljYTtmb250LXNpemU6IDEzcHg7Zm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiBub3JtYWw7bGluZS1oZWlnaHQ6IDE1MCU7dGV4dC1hbGlnbjogbGVmdDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bWFyZ2luOiAxMHB4IDA7cGFkZGluZzogMDttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTsiPkhlbGxvIFNlY3VybHkgdGVhbSE8L3A-DQoNCjxwIGRpcj0ibHRyIiBzdHlsZT0iY29sb3I6ICMyMjIyMjI7Zm9udC1mYW1pbHk6IEhlbHZldGljYTtmb250LXNpemU6IDEzcHg7Zm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiBub3JtYWw7bGluZS1oZWlnaHQ6IDE1MCU7dGV4dC1hbGlnbjogbGVmdDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bWFyZ2luOiAxMHB4IDA7cGFkZGluZzogMDttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTsiPldl4oCZcmUgaGFwcHkgdG8gc2hhcmUgdGhhdCB0aGUgUGFja2FnZSAxMyB1cGRhdGUgZm9yIEZpbHRlciBhbmQgQXdhcmUgaXMgY29taW5nIGluIGxhdGUgTWF5LiBTcGVjaWZpYyBpbmZvcm1hdGlvbiBvbiB3aGVuIHRoaXMgcGFja2FnZSBpcyBkZXBsb3llZCB0byBwYXJ0aWN1bGFyIGNsdXN0ZXJzIHdpbGwgYmUgcHVibGlzaGVkIGluIHRoZSAjcmVsZWFzZXMgY2hhbm5lbC48L3A-DQoNCjxwIGRpcj0ibHRyIiBzdHlsZT0iY29sb3I6ICMyMjIyMjI7Zm9udC1mYW1pbHk6IEhlbHZldGljYTtmb250LXNpemU6IDEzcHg7Zm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiBub3JtYWw7bGluZS1oZWlnaHQ6IDE1MCU7dGV4dC1hbGlnbjogbGVmdDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bWFyZ2luOiAxMHB4IDA7cGFkZGluZzogMDttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTsiPlBhY2thZ2UgMTMgaW5jbHVkZXMgc29tZSBtaW5vciBlbmhhbmNlbWVudHMgdG8gRmlsdGVyLCBBd2FyZSwgYW5kIG91ciBpbnRlcm5hbCBzdXBwb3J0IHRvb2w8L3A-DQoNCjxoMiBkaXI9Imx0ciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtkaXNwbGF5OiBibG9jazttYXJnaW46IDA7cGFkZGluZzogMDtjb2xvcjogIzIwMjAyMDtmb250LWZhbWlseTogSGVsdmV0aWNhO2ZvbnQtc2l6ZTogMjJweDtmb250LXN0eWxlOiBub3JtYWw7Zm9udC13ZWlnaHQ6IGJvbGQ7bGluZS1oZWlnaHQ6IDEyNSU7bGV0dGVyLXNwYWNpbmc6IG5vcm1hbDt0ZXh0LWFsaWduOiBsZWZ0OyI-PHN0cm9uZyBpZD0iZG9jcy1pbnRlcm5hbC1ndWlkLTA5YjIzOGU4LTdmZmYtOTljNi0xNzZmLTQ3ZmY3ZDEyMGVmOSIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPlBhcnRuZXIgU2V0dXAgaW4gdGhlIFN1cHBvcnQgVG9vbDwvc3Ryb25nPjwvaDI-DQoNCjxwIGRpcj0ibHRyIiBzdHlsZT0iY29sb3I6ICMyMjIyMjI7Zm9udC1mYW1pbHk6IEhlbHZldGljYTtmb250LXNpemU6IDEzcHg7Zm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiBub3JtYWw7bGluZS1oZWlnaHQ6IDE1MCU7dGV4dC1hbGlnbjogbGVmdDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bWFyZ2luOiAxMHB4IDA7cGFkZGluZzogMDttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTsiPkEgbmV3IGZlYXR1cmUgaW4gdGhlIFN1cHBvcnQgVG9vbCBpcyBhdmFpbGFibGUgdGhhdCBhdXRvbWF0ZXMgYSB0YXNrIHRoYXQgcHJldmlvdXNseSByZXF1aXJlZCBEZXZPcHMgc3VwcG9ydC4gVGhlIG5ldyDigJxtdWx0aS1zY2hvb2wgbG9naW7igJ0gdGFiIGFsbG93cyBTdXBwb3J0IGFnZW50cyB0byBwcm9tb3RlIGEgcGFydG5lciBGSUQgdG8gbXVsdGktc2Nob29sLCBhc3NpZ24gY3VzdG9tZXIgRklEcywgYW5kIGVkaXQgYWdlbnRzIGRpcmVjdGx5LiBUaGUgbXVsdGktc2Nob29sIGxvZ2luIHN5c3RlbSByZWxpZXMgb24gbmFtZWQgYWdlbnRzIGFzIGl0IGFsbG93cyB0aGVtIHRvIG1vY2sgYWNjZXNzIHRvIHRoZWlyIGN1c3RvbWVyIEZJRHMuPC9wPg0KDQo8aDIgZGlyPSJsdHIiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7ZGlzcGxheTogYmxvY2s7bWFyZ2luOiAwO3BhZGRpbmc6IDA7Y29sb3I6ICMyMDIwMjA7Zm9udC1mYW1pbHk6IEhlbHZldGljYTtmb250LXNpemU6IDIycHg7Zm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiBib2xkO2xpbmUtaGVpZ2h0OiAxMjUlO2xldHRlci1zcGFjaW5nOiBub3JtYWw7dGV4dC1hbGlnbjogbGVmdDsiPjxzdHJvbmcgaWQ9ImRvY3MtaW50ZXJuYWwtZ3VpZC0wOWIyMzhlOC03ZmZmLTk5YzYtMTc2Zi00N2ZmN2QxMjBlZjkiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij5OZXcgb3B0aW9uIHRvIHNob3cgYnVsbHlpbmcgYWN0aXZpdHkgaW4gRW5oYW5jZWQgUHJpdmFjeSBNb2RlIChBd2FyZSk8L3N0cm9uZz48L2gyPg0KDQo8cCBkaXI9Imx0ciIgc3R5bGU9ImNvbG9yOiAjMjIyMjIyO2ZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7Zm9udC1zaXplOiAxM3B4O2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDogbm9ybWFsO2xpbmUtaGVpZ2h0OiAxNTAlO3RleHQtYWxpZ246IGxlZnQ7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21hcmdpbjogMTBweCAwO3BhZGRpbmc6IDA7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7Ij5Gb3Igc2Nob29scyB1c2luZyBFbmhhbmNlZCBQcml2YWN5IE1vZGUgKHNwZWNpZmljYWxseSwgc2Nob29scyBpbiBNaW5uZXNvdGEsIHdoaWNoIHJlY2VudGx5IHBhc3NlZCBTdHVkZW50IERhdGEgUHJpdmFjeSBsYXcpLCB0aGVyZSBpcyBhIG5ldyBvcHRpb24gdG8gc2hvdyBvbmx5IGJ1bGx5aW5nLXJlbGF0ZWQgYWN0aXZpdHkgaW4gdGhlIGFjdGl2aXR5IGZlZWQgKGluc3RlYWQgb2YgZGlzYWJsaW5nIGl0IGVudGlyZWx5KSwgYXMgdGhlIGxhdyBhbGxvd3MgZm9yIHNjaG9vbHMgdG8gdmlldyB0aGlzIGRhdGEgaWYgaXQgY29uc3RpdHV0ZXMgYSB0aHJlYXQgdG8gcGh5c2ljYWwgc2FmZXR5LjwvcD4NCg0KPGgyIGRpcj0ibHRyIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogMDtwYWRkaW5nOiAwO2NvbG9yOiAjMjAyMDIwO2ZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7Zm9udC1zaXplOiAyMnB4O2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDogYm9sZDtsaW5lLWhlaWdodDogMTI1JTtsZXR0ZXItc3BhY2luZzogbm9ybWFsO3RleHQtYWxpZ246IGxlZnQ7Ij48c3Ryb25nIGlkPSJkb2NzLWludGVybmFsLWd1aWQtMDliMjM4ZTgtN2ZmZi05OWM2LTE3NmYtNDdmZjdkMTIwZWY5IiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-RHVhbCBQcm92aXNpb25pbmcgZm9yIEF6dXJlIHByaW1hcnkgZG9tYWluIHNjaG9vbHMgKGZvciBGaWx0ZXIgYW5kIEF3YXJlKTwvc3Ryb25nPjwvaDI-DQoNCjxwIGRpcj0ibHRyIiBzdHlsZT0iY29sb3I6ICMyMjIyMjI7Zm9udC1mYW1pbHk6IEhlbHZldGljYTtmb250LXNpemU6IDEzcHg7Zm9udC1zdHlsZTogbm9ybWFsO2ZvbnQtd2VpZ2h0OiBub3JtYWw7bGluZS1oZWlnaHQ6IDE1MCU7dGV4dC1hbGlnbjogbGVmdDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bWFyZ2luOiAxMHB4IDA7cGFkZGluZzogMDttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTsiPkZvciBzY2hvb2xzIHRoYXQgcmVxdWlyZSBkdWFsIHByb3Zpc2lvbmluZyAoc2Nob29scyB0aGF0IHJvc3RlciBzdHVkZW50cyBmcm9tIGJvdGggR29vZ2xlIFdvcmtzcGFjZSBhbmQgTWljcm9zb2Z0IEF6dXJlKSwgd2Ugbm93IHN1cHBvcnQgdXNpbmcgQXp1cmUgYXMgdGhlIHByaW1hcnkgZG9tYWluLjwvcD4NCg0KPHAgZGlyPSJsdHIiIHN0eWxlPSJjb2xvcjogIzIyMjIyMjtmb250LWZhbWlseTogSGVsdmV0aWNhO2ZvbnQtc2l6ZTogMTNweDtmb250LXN0eWxlOiBub3JtYWw7Zm9udC13ZWlnaHQ6IG5vcm1hbDtsaW5lLWhlaWdodDogMTUwJTt0ZXh0LWFsaWduOiBsZWZ0Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttYXJnaW46IDEwcHggMDtwYWRkaW5nOiAwO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5OyI-4oCUPC9wPg0KDQo8cCBkaXI9Imx0ciIgc3R5bGU9ImNvbG9yOiAjMjIyMjIyO2ZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7Zm9udC1zaXplOiAxM3B4O2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDogbm9ybWFsO2xpbmUtaGVpZ2h0OiAxNTAlO3RleHQtYWxpZ246IGxlZnQ7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21hcmdpbjogMTBweCAwO3BhZGRpbmc6IDA7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7Ij5QbGVhc2UgZGlyZWN0IHF1ZXN0aW9ucyBhYm91dCBBd2FyZSB0byBwcm9kdWN0IG1hbmFnZXIgUGF1bCBLYXRjaGVyIGluIHRoZSA8c3Ryb25nIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4jcHJvZC1xdWVzdGlvbnMtYXdhcmU8L3N0cm9uZz4gY2hhbm5lbCBvbiBTbGFjay4gRm9yIEZpbHRlciwgc2VlayBwcm9kdWN0IG1hbmFnZXIgQ3JhaWcgRmVhcm5zaWRlcyBpbiB0aGUgPHN0cm9uZyBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-I3Byb2QtcXVlc3Rpb25zLWZpbHRlcjwvc3Ryb25nPiBjaGFubmVsLjwvcD4NCg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PjwvdGFibGU-DQogICAgICAgICAgICAgICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgIDwvdGJvZHk-PC90YWJsZT4NCgkJCQk8IS0tW2lmIGd0ZSBtc28gOV0-DQoJCQkJPC90ZD4NCgkJCQk8IVtlbmRpZl0tLT4NCg0KCQkJCTwhLS1baWYgZ3RlIG1zbyA5XT4NCiAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgIDwvdGFibGU-DQoJCQkJPCFbZW5kaWZdLS0-DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICA8L3RyPg0KICAgIDwvdGJvZHk-DQo8L3RhYmxlPjx0YWJsZSBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgd2lkdGg9IjEwMCUiIGNsYXNzPSJtY25EaXZpZGVyQmxvY2siIHN0eWxlPSJtaW4td2lkdGg6IDEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQogICAgPHRib2R5IGNsYXNzPSJtY25EaXZpZGVyQmxvY2tPdXRlciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICA8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICAgICAgPHRkIGNsYXNzPSJtY25EaXZpZGVyQmxvY2tJbm5lciIgc3R5bGU9Im1pbi13aWR0aDogMTAwJTtwYWRkaW5nOiAxOHB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0ibWNuRGl2aWRlckNvbnRlbnQiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9Im1pbi13aWR0aDogMTAwJTtib3JkZXItdG9wOiAycHggc29saWQgI0RFREVERTstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O3RhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50O21hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7Ij4NCiAgICAgICAgICAgICAgICAgICAgPHRib2R5IHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij48dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-PC9zcGFuPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICA8L3Rib2R5PjwvdGFibGU-DQo8IS0tDQogICAgICAgICAgICAgICAgPHRkIGNsYXNzPSJtY25EaXZpZGVyQmxvY2tJbm5lciIgc3R5bGU9InBhZGRpbmc6IDE4cHg7Ij4NCiAgICAgICAgICAgICAgICA8aHIgY2xhc3M9Im1jbkRpdmlkZXJDb250ZW50IiBzdHlsZT0iYm9yZGVyLWJvdHRvbS1jb2xvcjpub25lOyBib3JkZXItbGVmdC1jb2xvcjpub25lOyBib3JkZXItcmlnaHQtY29sb3I6bm9uZTsgYm9yZGVyLWJvdHRvbS13aWR0aDowOyBib3JkZXItbGVmdC13aWR0aDowOyBib3JkZXItcmlnaHQtd2lkdGg6MDsgbWFyZ2luLXRvcDowOyBtYXJnaW4tcmlnaHQ6MDsgbWFyZ2luLWJvdHRvbTowOyBtYXJnaW4tbGVmdDowOyIgLz4NCi0tPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgPC90cj4NCiAgICA8L3Rib2R5Pg0KPC90YWJsZT48dGFibGUgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiBjbGFzcz0ibWNuQm94ZWRUZXh0QmxvY2siIHN0eWxlPSJtaW4td2lkdGg6IDEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQogICAgPCEtLVtpZiBndGUgbXNvIDldPg0KCTx0YWJsZSBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgd2lkdGg9IjEwMCUiPg0KCTwhW2VuZGlmXS0tPg0KCTx0Ym9keSBjbGFzcz0ibWNuQm94ZWRUZXh0QmxvY2tPdXRlciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICA8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KICAgICAgICAgICAgPHRkIHZhbGlnbj0idG9wIiBjbGFzcz0ibWNuQm94ZWRUZXh0QmxvY2tJbm5lciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KDQoJCQkJPCEtLVtpZiBndGUgbXNvIDldPg0KCQkJCTx0ZCBhbGlnbj0iY2VudGVyIiB2YWxpZ249InRvcCIgIj4NCgkJCQk8IVtlbmRpZl0tLT4NCiAgICAgICAgICAgICAgICA8dGFibGUgYWxpZ249ImxlZnQiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMTAwJSIgc3R5bGU9Im1pbi13aWR0aDogMTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50O3RhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDtib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50O21hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7IiBjbGFzcz0ibWNuQm94ZWRUZXh0Q29udGVudENvbnRhaW5lciI-DQogICAgICAgICAgICAgICAgICAgIDx0Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-PHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCg0KICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPSJwYWRkaW5nLXRvcDogOXB4O3BhZGRpbmctbGVmdDogMThweDtwYWRkaW5nLWJvdHRvbTogOXB4O3BhZGRpbmctcmlnaHQ6IDE4cHg7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-DQoNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9Im1jblRleHRDb250ZW50Q29udGFpbmVyIiB3aWR0aD0iMTAwJSIgc3R5bGU9Im1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-PHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2YWxpZ249InRvcCIgY2xhc3M9Im1jblRleHRDb250ZW50IiBzdHlsZT0icGFkZGluZzogMThweDtjb2xvcjogIzIyMjIyMjtmb250LWZhbWlseTogSGVsdmV0aWNhO2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogbm9ybWFsO3RleHQtYWxpZ246IGxlZnQ7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O3dvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7bGluZS1oZWlnaHQ6IDEyNSU7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7cGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OiAhaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OiAhaW1wb3J0YW50OyI-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGlyPSJsdHIiIHN0eWxlPSJjb2xvcjogIzIyMjIyMjtmb250LWZhbWlseTogSGVsdmV0aWNhO2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogbm9ybWFsO3RleHQtYWxpZ246IGxlZnQ7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21hcmdpbjogMTBweCAwO3BhZGRpbmc6IDA7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bGluZS1oZWlnaHQ6IDEyNSU7Ij48c3BhbiBzdHlsZT0iZm9udC1zaXplOiAxMnB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPjxzdHJvbmcgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPkhhdmUgZmVlZGJhY2sgYWJvdXQgdGhlc2UgbWF0ZXJpYWxzPzxiciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQpPciBpZGVhcyBhYm91dCBvdGhlciB3YXlzIHdlIGNhbiBiZXR0ZXIgc3VwcG9ydCB5b3U_PC9zdHJvbmc-PC9zcGFuPjwvcD4NCg0KPHAgZGlyPSJsdHIiIHN0eWxlPSJjb2xvcjogIzIyMjIyMjtmb250LWZhbWlseTogSGVsdmV0aWNhO2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogbm9ybWFsO3RleHQtYWxpZ246IGxlZnQ7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21hcmdpbjogMTBweCAwO3BhZGRpbmc6IDA7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bGluZS1oZWlnaHQ6IDEyNSU7Ij48c3BhbiBzdHlsZT0iZm9udC1zaXplOiAxMnB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPlBsZWFzZSByZWFjaCBvdXQgdG8gSnVsaWUgV2l0aHJvdyBhdCA8YSBocmVmPSJtYWlsdG86anVsaWUud2l0aHJvd0BzZWN1cmx5LmNvbSIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTtjb2xvcjogIzAwNWViODtmb250LXdlaWdodDogbm9ybWFsO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyI-anVsaWUud2l0aHJvd0BzZWN1cmx5LmNvbTwvYT4uPGJyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCk9yIFNsYWNrIGlmIHlvdSBtdXN0LCBidXQgdHJ1c3QgdXMsIGVtYWlsIGlzIGJldHRlciBmb3IgdGhpcy48L3NwYW4-PC9wPg0KDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk-PC90YWJsZT4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ-DQogICAgICAgICAgICAgICAgICAgIDwvdHI-DQogICAgICAgICAgICAgICAgPC90Ym9keT48L3RhYmxlPg0KCQkJCTwhLS1baWYgZ3RlIG1zbyA5XT4NCgkJCQk8L3RkPg0KCQkJCTwhW2VuZGlmXS0tPg0KDQoJCQkJPCEtLVtpZiBndGUgbXNvIDldPg0KICAgICAgICAgICAgICAgIDwvdHI-DQogICAgICAgICAgICAgICAgPC90YWJsZT4NCgkJCQk8IVtlbmRpZl0tLT4NCiAgICAgICAgICAgIDwvdGQ-DQogICAgICAgIDwvdHI-DQogICAgPC90Ym9keT4NCjwvdGFibGU-PC90ZD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2YWxpZ249InRvcCIgaWQ9InRlbXBsYXRlRm9vdGVyIiBzdHlsZT0iYmFja2dyb3VuZDojdHJhbnNwYXJlbnQgbm9uZSBuby1yZXBlYXQgY2VudGVyL2NvdmVyOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTtiYWNrZ3JvdW5kLWNvbG9yOiAjdHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1pbWFnZTogbm9uZTtiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO2JvcmRlci10b3A6IDA7Ym9yZGVyLWJvdHRvbTogMDtwYWRkaW5nLXRvcDogMHB4O3BhZGRpbmctYm90dG9tOiAwcHg7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7Ij48dGFibGUgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHdpZHRoPSIxMDAlIiBjbGFzcz0ibWNuVGV4dEJsb2NrIiBzdHlsZT0ibWluLXdpZHRoOiAxMDAlOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7dGFibGUtbGF5b3V0OiBmaXhlZCAhaW1wb3J0YW50O2JvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7bWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsiPg0KICAgIDx0Ym9keSBjbGFzcz0ibWNuVGV4dEJsb2NrT3V0ZXIiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgPHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCiAgICAgICAgICAgIDx0ZCB2YWxpZ249InRvcCIgY2xhc3M9Im1jblRleHRCbG9ja0lubmVyIiBzdHlsZT0icGFkZGluZy10b3A6IDlweDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDogIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDogIWltcG9ydGFudDsiPg0KICAgICAgICAgICAgICAJPCEtLVtpZiBtc29dPg0KCQkJCTx0YWJsZSBhbGlnbj0ibGVmdCIgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiIHdpZHRoPSIxMDAlIiBzdHlsZT0id2lkdGg6MTAwJTsiPg0KCQkJCTx0cj4NCgkJCQk8IVtlbmRpZl0tLT4NCgkJCQ0KCQkJCTwhLS1baWYgbXNvXT4NCgkJCQk8dGQgdmFsaWduPSJ0b3AiIHdpZHRoPSI2MDAiIHN0eWxlPSJ3aWR0aDo2MDBweDsiPg0KCQkJCTwhW2VuZGlmXS0tPg0KICAgICAgICAgICAgICAgIDx0YWJsZSBhbGlnbj0ibGVmdCIgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIHN0eWxlPSJtYXgtd2lkdGg6IDEwMCU7bWluLXdpZHRoOiAxMDAlOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7dGFibGUtbGF5b3V0OiBmaXhlZCAhaW1wb3J0YW50O2JvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7bWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsiIHdpZHRoPSIxMDAlIiBjbGFzcz0ibWNuVGV4dENvbnRlbnRDb250YWluZXIiPg0KICAgICAgICAgICAgICAgICAgICA8dGJvZHkgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPjx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQoNCiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2YWxpZ249InRvcCIgY2xhc3M9Im1jblRleHRDb250ZW50IiBzdHlsZT0icGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtwYWRkaW5nLXJpZ2h0OiAxOHB4O3BhZGRpbmctYm90dG9tOiA5cHg7cGFkZGluZy1sZWZ0OiAxOHB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTt3b3JkLWJyZWFrOiBicmVhay13b3JkO2NvbG9yOiAjNjU2NTY1O2ZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7Zm9udC1zaXplOiAxMnB4O2xpbmUtaGVpZ2h0OiAxNTAlO3RleHQtYWxpZ246IGNlbnRlcjttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSB1dGYtOCB3b3JrcyBmb3IgbW9zdCBjYXNlcyAtLT48IS0tIEZvcmNpbmcgaW5pdGlhbC1zY2FsZSBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5IC0tPjwhLS0gVXNlIHRoZSBsYXRlc3QgKGVkZ2UpIHZlcnNpb24gb2YgSUUgcmVuZGVyaW5nIGVuZ2luZSAtLT48IS0tIERpc2FibGUgYXV0by1zY2FsZSBpbiBpT1MgMTAgTWFpbCBlbnRpcmVseSAtLT48IS0tIFRoZSB0aXRsZSB0YWcgc2hvd3MgaW4gZW1haWwgbm90aWZpY2F0aW9ucywgbGlrZSBBbmRyb2lkIDQuNC4gLS0-PCEtLSBXZWIgRm9udCAvIEBmb250LWZhY2UgOiBCRUdJTiAtLT48IS0tIE5PVEU6IElmIHdlYiBmb250cyBhcmUgbm90IHJlcXVpcmVkLCBsaW5lcyAxMCAtIDI3IGNhbiBiZSBzYWZlbHkgcmVtb3ZlZC4gLS0-PCEtLSBEZXNrdG9wIE91dGxvb2sgY2hva2VzIG9uIHdlYiBmb250IHJlZmVyZW5jZXMgYW5kIGRlZmF1bHRzIHRvIFRpbWVzIE5ldyBSb21hbiwgc28gd2UgZm9yY2UgYSBzYWZlIGZhbGxiYWNrIGZvbnQuIC0tPjwhLS1baWYgbXNvXT4NCiAgICAgICAgPHN0eWxlPg0KICAgICAgICAgICAgKiB7DQogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgIWltcG9ydGFudDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgPC9zdHlsZT4NCiAgICA8IVtlbmRpZl0tLT48IS0tIEFsbCBvdGhlciBjbGllbnRzIGdldCB0aGUgd2ViZm9udCByZWZlcmVuY2U7IHNvbWUgd2lsbCByZW5kZXIgdGhlIGZvbnQgYW5kIG90aGVycyB3aWxsIHNpbGVudGx5IGZhaWwgdG8gdGhlIGZhbGxiYWNrcy4gTW9yZSBvbiB0aGF0IGhlcmU6IGh0dHA6Ly9zdHlsZWNhbXBhaWduLmNvbS9ibG9nLzMwMTUvMDIvd2ViZm9udC1zdXBwb3J0LWluLWVtYWlsLyAtLT48IS0tW2lmICFtc29dPjwhLS0-PCEtLSBpbnNlcnQgd2ViIGZvbnQgcmVmZXJlbmNlLCBlZzogPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PVJvYm90bzo0MDAsNzAwJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz4gLS0-PCEtLTwhW2VuZGlmXS0tPjwhLS0gV2ViIEZvbnQgLyBAZm9udC1mYWNlIDogRU5EIC0tPjwhLS0gQ1NTIFJlc2V0IDogQkVHSU4gLS0-DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4vKiBXaGF0IGl0IGRvZXM6IFJlbW92ZSBzcGFjZXMgYXJvdW5kIHRoZSBlbWFpbCBkZXNpZ24gYWRkZWQgYnkgc29tZSBlbWFpbCBjbGllbnRzLiAqLw0KCQkvKiBCZXdhcmU6IEl0IGNhbiByZW1vdmUgdGhlIHBhZGRpbmcgLyBtYXJnaW4gYW5kIGFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNvbXBvc2UgYSByZXBseSB3aW5kb3cuICovDQoNCgkJaHRtbCwNCgkJYm9keSB7DQoJCQltYXJnaW46IDAgYXV0byAhaW1wb3J0YW50Ow0KCQkJcGFkZGluZzogMCAhaW1wb3J0YW50Ow0KCQkJaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7DQoJCQl3aWR0aDogMTAwJSAhaW1wb3J0YW50Ow0KCQl9DQoNCgkJLyogV2hhdCBpdCBkb2VzOiBTdG9wcyBlbWFpbCBjbGllbnRzIHJlc2l6aW5nIHNtYWxsIHRleHQuICovDQoNCgkJKiB7DQoJCQktbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsNCgkJCS13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsNCgkJfQ0KDQoJCS8qIFdoYXQgaXQgZG9lczogQ2VudGVycyBlbWFpbCBvbiBBbmRyb2lkIDQuNCAqLw0KDQoJCWRpdltzdHlsZSo9Im1hcmdpbjogMTZweCAwIl0gew0KCQkJbWFyZ2luOiAyMCAhaW1wb3J0YW50Ow0KCQl9DQoNCgkJLyogV2hhdCBpdCBkb2VzOiBTdG9wcyBPdXRsb29rIGZyb20gYWRkaW5nIGV4dHJhIHNwYWNpbmcgdG8gdGFibGVzLiAqLw0KDQoJCXRhYmxlLA0KCQl0ZCB7DQoJCQltc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDsNCgkJCW1zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50Ow0KCQl9DQoNCgkJLyogV2hhdCBpdCBkb2VzOiBGaXhlcyB3ZWJraXQgcGFkZGluZyBpc3N1ZS4gRml4IGZvciBZYWhvbyBtYWlsIHRhYmxlIGFsaWdubWVudCBidWcuIEFwcGxpZXMgdGFibGUtbGF5b3V0IHRvIHRoZSBmaXJzdCAyIHRhYmxlcyB0aGVuIHJlbW92ZXMgZm9yIGFueXRoaW5nIG5lc3RlZCBkZWVwZXIuICovDQoNCgkJdGFibGUgew0KCQkJYm9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDsNCgkJCWJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDsNCgkJCXRhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDsNCgkJCW1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7DQoJCX0NCg0KCQl0YWJsZS5sZWZ0LWFsaWduIHsNCgkJCW1hcmdpbjogMCAwIDAgMCAhaW1wb3J0YW50Ow0KCQl9DQoNCgkJdGFibGUgdGFibGUgdGFibGUgew0KCQkJdGFibGUtbGF5b3V0OiBhdXRvOw0KCQl9DQoNCgkJLyogV2hhdCBpdCBkb2VzOiBVc2VzIGEgYmV0dGVyIHJlbmRlcmluZyBtZXRob2Qgd2hlbiByZXNpemluZyBpbWFnZXMgaW4gSUUuICovDQoNCgkJaW1nIHsNCgkJCS1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7DQoJCX0NCg0KCQkvKiBXaGF0IGl0IGRvZXM6IEEgd29yay1hcm91bmQgZm9yIGVtYWlsIGNsaWVudHMgbWVkZGxpbmcgaW4gdHJpZ2dlcmVkIGxpbmtzLiAqLw0KDQoJCSpbeC1hcHBsZS1kYXRhLWRldGVjdG9yc10sDQoJCS8qIGlPUyAqLw0KDQoJCS54LWdtYWlsLWRhdGEtZGV0ZWN0b3JzLA0KCQkvKiBHbWFpbCAqLw0KDQoJCS54LWdtYWlsLWRhdGEtZGV0ZWN0b3JzICosDQoJCS5hQm4gew0KCQkJYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50Ow0KCQkJY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7DQoJCQljb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50Ow0KCQkJdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7DQoJCQlmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDsNCgkJCWZvbnQtZmFtaWx5OiBpbmhlcml0ICFpbXBvcnRhbnQ7DQoJCQlmb250LXdlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50Ow0KCQkJbGluZS1oZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDsNCgkJfQ0KDQoJCS8qIFdoYXQgaXQgZG9lczogUHJldmVudHMgR21haWwgZnJvbSBkaXNwbGF5aW5nIGFuIGRvd25sb2FkIGJ1dHRvbiBvbiBsYXJnZSwgbm9uLWxpbmtlZCBpbWFnZXMuICovDQoNCgkJLmE2UyB7DQoJCQlkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7DQoJCQlvcGFjaXR5OiAwLjAxICFpbXBvcnRhbnQ7DQoJCX0NCg0KCQkvKiBJZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrLCBhZGQgYSAuZy1pbWcgY2xhc3MgdG8gYW55IGltYWdlIGluIHF1ZXN0aW9uLiAqLw0KDQoJCWltZy5nLWltZytkaXYgew0KCQkJZGlzcGxheTogbm9uZSAhaW1wb3J0YW50Ow0KCQl9DQoNCgkJLyogV2hhdCBpdCBkb2VzOiBQcmV2ZW50cyB1bmRlcmxpbmluZyB0aGUgYnV0dG9uIHRleHQgaW4gV2luZG93cyAxMCAqLw0KDQoJCS5idXR0b24tbGluayB7DQoJCQl0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsNCgkJfQ0KDQoJCS8qIFdoYXQgaXQgZG9lczogUmVtb3ZlcyByaWdodCBndXR0ZXIgaW4gR21haWwgaU9TIGFwcDogaHR0cHM6Ly9naXRodWIuY29tL1RlZEdvYXMvQ2VyYmVydXMvaXNzdWVzLzg5ICAqLw0KCQkvKiBDcmVhdGUgb25lIG9mIHRoZXNlIG1lZGlhIHF1ZXJpZXMgZm9yIGVhY2ggYWRkaXRpb25hbCB2aWV3cG9ydCBzaXplIHlvdSdkIGxpa2UgdG8gZml4ICovDQoJCS8qIFRoYW5rcyB0byBFcmljIExlcGV0aXQgKEBlcmljbGVwZXRpdHNmKSBmb3IgaGVscCB0cm91Ymxlc2hvb3RpbmcgKi8NCjwvc3R5bGU-DQo8IS0tIENTUyBSZXNldCA6IEVORCAtLT48IS0tIFByb2dyZXNzaXZlIEVuaGFuY2VtZW50cyA6IEJFR0lOIC0tPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-dGQubWNuVGV4dENvbnRlbnQsDQoJCXRkLm1jblRleHRCbG9ja0lubmVyIHsNCgkJCXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7DQoJCQlwYWRkaW5nLXJpZ2h0OiAhaW1wb3J0YW50Ow0KCQkJcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDsNCgkJCXBhZGRpbmctbGVmdDogICFpbXBvcnRhbnQ7DQoJCX0NCg0KCQkvKiBNZWRpYSBRdWVyaWVzICovDQoNCgkJQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHsNCgkJCXVsLnVsTGlzdCB7DQoJCQkJdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50Ow0KCQkJfQ0KDQoJCQkuZW1haWwtY29udGFpbmVyLA0KCQkJLmZvb3Rlci1jb250YWluZXIgew0KCQkJCXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7DQoJCQkJbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7DQoJCQl9DQoNCgkJCS5mb290ZXItY29udGFpbmVyIHsNCgkJCQl0YWJsZS1sYXlvdXQ6IGluaGVyaXQgIWltcG9ydGFudDsNCgkJCX0NCg0KCQkJLyogV2hhdCBpdCBkb2VzOiBGb3JjZXMgZWxlbWVudHMgdG8gcmVzaXplIHRvIHRoZSBmdWxsIHdpZHRoIG9mIHRoZWlyIGNvbnRhaW5lci4gVXNlZnVsIGZvciByZXNpemluZyBpbWFnZXMgYmV5b25kIHRoZWlyIG1heC13aWR0aC4gKi8NCgkJCS5mbHVpZCB7DQoJCQkJbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7DQoJCQkJaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7DQoJCQkJbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsNCgkJCQltYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDsNCgkJCX0NCg0KCQkJLyogV2hhdCBpdCBkb2VzOiBGb3JjZXMgdGFibGUgY2VsbHMgaW50byBmdWxsLXdpZHRoIHJvd3MuICovDQoJCQkuc3RhY2stY29sdW1uLA0KCQkJLnN0YWNrLWNvbHVtbi1jZW50ZXIgew0KCQkJCWRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7DQoJCQkJd2lkdGg6IGF1dG8gIWltcG9ydGFudDsNCgkJCQltYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsNCgkJCQlkaXJlY3Rpb246IGx0ciAhaW1wb3J0YW50Ow0KCQkJfQ0KDQoJCQkuYWRkLW1iLW1vYmlsZSB7DQoJCQkJbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50Ow0KCQkJfQ0KDQoJCQkvKiBBbmQgY2VudGVyIGp1c3RpZnkgdGhlc2Ugb25lcy4gKi8NCgkJCS5zdGFjay1jb2x1bW4tY2VudGVyIHsNCgkJCQl0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsNCgkJCX0NCg0KCQkJLyogV2hhdCBpdCBkb2VzOiBHZW5lcmljIHV0aWxpdHkgY2xhc3MgZm9yIGNlbnRlcmluZy4gVXNlZnVsIGZvciBpbWFnZXMsIGJ1dHRvbnMsIGFuZCBuZXN0ZWQgdGFibGVzLiAqLw0KCQkJLmNlbnRlci1vbi1uYXJyb3cgew0KCQkJCXRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50Ow0KCQkJCWRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7DQoJCQkJbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsNCgkJCQltYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDsNCgkJCQlmbG9hdDogbm9uZSAhaW1wb3J0YW50Ow0KCQkJfQ0KDQoJCQl0YWJsZS5jZW50ZXItb24tbmFycm93IHsNCgkJCQlkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsNCgkJCX0NCg0KCQkJdGFibGUubGVmdC1hbGlnbiB7DQoJCQkJbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsNCgkJCX0NCg0KCQkJLmhlYWRlci1iZyB7DQoJCQkJYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50Ow0KCQkJfQ0KDQoJCQkuYm9yZGVyLXRkIHsNCgkJCQlkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7DQoJCQl9DQoNCgkJCS5taWRkbGUtc3BhY2Ugew0KCQkJCWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7DQoJCQl9DQoJCX0NCjwvc3R5bGU-DQo8IS0tIFByb2dyZXNzaXZlIEVuaGFuY2VtZW50cyA6IEVORCAtLT48IS0tIFdoYXQgaXQgZG9lczogTWFrZXMgYmFja2dyb3VuZCBpbWFnZXMgaW4gNzJwcGkgT3V0bG9vayByZW5kZXIgYXQgY29ycmVjdCBzaXplLiAtLT48IS0tW2lmIGd0ZSBtc28gOV0-DQogICAgPHhtbD4NCiAgICAgICAgPG86T2ZmaWNlRG9jdW1lbnRTZXR0aW5ncz4NCiAgICAgICAgICAgIDxvOkFsbG93UE5HLz4NCiAgICAgICAgICAgIDxvOlBpeGVsc1BlckluY2g-OTY8L286UGl4ZWxzUGVySW5jaD4NCiAgICAgICAgPC9vOk9mZmljZURvY3VtZW50U2V0dGluZ3M-DQogICAgPC94bWw-DQo8IVtlbmRpZl0tLT4NCjxjZW50ZXIgc3R5bGU9ImJhY2tncm91bmQ6ICNmNWY1ZjU7dGV4dC1hbGlnbjogbGVmdDt3aWR0aDogMTAwJTstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCjx0YWJsZSBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9ImVtYWlsLWNvbnRhaW5lciIgcm9sZT0icHJlc2VudGF0aW9uIiB3aWR0aD0iMTAwJSIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7dGFibGUtbGF5b3V0OiBmaXhlZCAhaW1wb3J0YW50O2JvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7bWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsiPg0KCTx0Ym9keSBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQoJCTx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQoJCQk8dGQgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KCQkJPHRhYmxlIGFsaWduPSJjZW50ZXIiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBjbGFzcz0iZW1haWwtY29udGFpbmVyIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmM2ZhOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7dGFibGUtbGF5b3V0OiBmaXhlZCAhaW1wb3J0YW50O2JvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7bWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsiIHdpZHRoPSIxMDAlIj4NCgkJCQk8dGJvZHkgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQkJPHRkIGhlaWdodD0iNDAiIHN0eWxlPSJmb250LXNpemU6IDFweDtsaW5lLWhlaWdodDogNDBweDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7Ij4mbmJzcDs8L3RkPg0KCQkJCQk8L3RyPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQkJPHRkIGFsaWduPSJjZW50ZXIiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7Ij48YSBocmVmPSJodHRwczovL3NlY3VybHkudXMxMy5saXN0LW1hbmFnZS5jb20vdHJhY2svY2xpY2s_dT1lNjljMjMxYTI4MDQ1Y2IxMGVlN2Q4YzEyJmlkPWM5NGJiYzk2Y2UmZT00ZTFlZjM2ZTA1IiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O2NvbG9yOiAjNjU2NTY1O2ZvbnQtd2VpZ2h0OiBub3JtYWw7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ij48aW1nIGFsdD0iU2VjdXJseSIgc3JjPSJodHRwczovL3NlbmR5LnNlY3VybHkuY29tL3VwbG9hZHMvMTYwODE5ODI0Ni5wbmciIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyOiAwO2hlaWdodDogYXV0byAhaW1wb3J0YW50O291dGxpbmU6IG5vbmU7dGV4dC1kZWNvcmF0aW9uOiBub25lOy1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7Ij48L2E-PC90ZD4NCgkJCQkJPC90cj4NCgkJCQkJPHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCgkJCQkJCTx0ZCBoZWlnaHQ9IjE2IiBzdHlsZT0iZm9udC1zaXplOiAxcHg7bGluZS1oZWlnaHQ6IDE2cHg7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-Jm5ic3A7PC90ZD4NCgkJCQkJPC90cj4NCgkJCQkJPHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCgkJCQkJCTx0ZCBhbGlnbj0iY2VudGVyIiBzdHlsZT0iZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZSBMVCBQcm8nLCBzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OiA0MDA7Zm9udC1zaXplOiAxNHB4O2xpbmUtaGVpZ2h0OiAyMHB4O2NvbG9yOiAjNDU0ZjViOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KCQkJCQkJPHAgc3R5bGU9Im1hcmdpbi10b3A6IDA7bWFyZ2luLWJvdHRvbTogMDtwYWRkaW5nLXRvcDogMDtwYWRkaW5nLWJvdHRvbTogMDttYXgtd2lkdGg6IDM2NHB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttYXJnaW46IDEwcHggMDtwYWRkaW5nOiAwO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O2NvbG9yOiAjNjU2NTY1O2ZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7Zm9udC1zaXplOiAxMnB4O2xpbmUtaGVpZ2h0OiAxNTAlO3RleHQtYWxpZ246IGNlbnRlcjsiPiZuYnNwOzwvcD4NCg0KCQkJCQkJPHAgc3R5bGU9Im1hcmdpbi10b3A6IDA7bWFyZ2luLWJvdHRvbTogMDtwYWRkaW5nLXRvcDogMDtwYWRkaW5nLWJvdHRvbTogMDttYXgtd2lkdGg6IDM2NHB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttYXJnaW46IDEwcHggMDtwYWRkaW5nOiAwO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O2NvbG9yOiAjNjU2NTY1O2ZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7Zm9udC1zaXplOiAxMnB4O2xpbmUtaGVpZ2h0OiAxNTAlO3RleHQtYWxpZ246IGNlbnRlcjsiPlNlY3VybHkgaXMgdGhlIHdob2xlLXN0dWRlbnQgc3VjY2VzcyBwbGF0Zm9ybSBkZXZlbG9wZWQgc3BlY2lmaWNhbGx5IGZvciB0aGUgbmVlZHMgb2YgdG9kYXnigJlzIEstMTIgc2Nob29scy48L3A-DQoJCQkJCQk8L3RkPg0KCQkJCQk8L3RyPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQkJPHRkIGhlaWdodD0iMjAiIHN0eWxlPSJmb250LXNpemU6IDFweDtsaW5lLWhlaWdodDogMjBweDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7Ij4mbmJzcDs8L3RkPg0KCQkJCQk8L3RyPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQkJPHRkIGFsaWduPSJjZW50ZXIiIHN0eWxlPSJmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlIExUIFBybycsIHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDEycHg7bGluZS1oZWlnaHQ6IDIwcHg7Y29sb3I6ICM3Njg4OWI7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-PGEgaHJlZj0ibWFpbHRvOnNhbGVzQHNlY3VybHkuY29tIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiAjNzY4ODliOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTtmb250LXdlaWdodDogbm9ybWFsOyI-c2FsZXNAc2VjdXJseS5jb208L2E-ICZuYnNwOyZuYnNwOyB8ICZuYnNwOyZuYnNwOyAxLTg1NS1TRUNVUkxZICZuYnNwOyZuYnNwOyB8ICZuYnNwOyZuYnNwOyA8YSBocmVmPSJodHRwczovL3NlY3VybHkudXMxMy5saXN0LW1hbmFnZS5jb20vdHJhY2svY2xpY2s_dT1lNjljMjMxYTI4MDQ1Y2IxMGVlN2Q4YzEyJmlkPWQ2NWUxNzVkMzImZT00ZTFlZjM2ZTA1IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiAjNzY4ODliOy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTtmb250LXdlaWdodDogbm9ybWFsOyI-d3d3LnNlY3VybHkuY29tPC9hPjwvdGQ-DQoJCQkJCTwvdHI-DQoJCQkJCTx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQoJCQkJCQk8dGQgaGVpZ2h0PSIyOCIgc3R5bGU9ImZvbnQtc2l6ZTogMXB4O2xpbmUtaGVpZ2h0OiAyOHB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPiZuYnNwOzwvdGQ-DQoJCQkJCTwvdHI-DQoJCQkJCTx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQoJCQkJCQk8dGQgYWxpZ249ImNlbnRlciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPg0KCQkJCQkJPHRhYmxlIGFsaWduPSJjZW50ZXIiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiB3aWR0aD0iMjMwIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDt0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7Ym9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDttYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyI-DQoJCQkJCQkJPHRib2R5IHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCgkJCQkJCQkJPHRyIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ij4NCgkJCQkJCQkJCTx0ZCBhbGlnbj0iY2VudGVyIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-PGEgaHJlZj0iaHR0cHM6Ly9zZWN1cmx5LnVzMTMubGlzdC1tYW5hZ2UuY29tL3RyYWNrL2NsaWNrP3U9ZTY5YzIzMWEyODA0NWNiMTBlZTdkOGMxMiZpZD1hNDRiZmU4MzFhJmU9NGUxZWYzNmUwNSIgdGFyZ2V0PSJfYmxhbmsiIHRpdGxlPSJGYWNlYm9vayIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTtjb2xvcjogIzY1NjU2NTtmb250LXdlaWdodDogbm9ybWFsO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyI-PGltZyBhbHQ9IkZhY2Vib29rIiBjbGFzcz0iZmx1aWQiIGhlaWdodD0iNDAiIHNyYz0iaHR0cHM6Ly9zZW5keS5zZWN1cmx5LmNvbS91cGxvYWRzLzE2MDg3MTc0OTYucG5nIiB3aWR0aD0iNDAiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyOiAwO2hlaWdodDogYXV0byAhaW1wb3J0YW50O291dGxpbmU6IG5vbmU7dGV4dC1kZWNvcmF0aW9uOiBub25lOy1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7Ij48L2E-PC90ZD4NCgkJCQkJCQkJCTx0ZCBhbGlnbj0iY2VudGVyIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-PGEgaHJlZj0iaHR0cHM6Ly9zZWN1cmx5LnVzMTMubGlzdC1tYW5hZ2UuY29tL3RyYWNrL2NsaWNrP3U9ZTY5YzIzMWEyODA0NWNiMTBlZTdkOGMxMiZpZD1jZWU0NWM5MTMzJmU9NGUxZWYzNmUwNSIgdGFyZ2V0PSJfYmxhbmsiIHRpdGxlPSJUd2l0dGVyIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O2NvbG9yOiAjNjU2NTY1O2ZvbnQtd2VpZ2h0OiBub3JtYWw7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ij48aW1nIGFsdD0iVHdpdHRlciIgY2xhc3M9ImZsdWlkIiBoZWlnaHQ9IjQwIiBzcmM9Imh0dHBzOi8vc2VuZHkuc2VjdXJseS5jb20vdXBsb2Fkcy8xNjA4NzE3NTgyLnBuZyIgd2lkdGg9IjQwIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlcjogMDtoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtvdXRsaW5lOiBub25lO3RleHQtZGVjb3JhdGlvbjogbm9uZTstbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyI-PC9hPjwvdGQ-DQoJCQkJCQkJCQk8dGQgYWxpZ249ImNlbnRlciIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPjxhIGhyZWY9Imh0dHBzOi8vc2VjdXJseS51czEzLmxpc3QtbWFuYWdlLmNvbS90cmFjay9jbGljaz91PWU2OWMyMzFhMjgwNDVjYjEwZWU3ZDhjMTImaWQ9YzM1YWI4MWJmMCZlPTRlMWVmMzZlMDUiIHRhcmdldD0iX2JsYW5rIiB0aXRsZT0iSW5zdGFncmFtIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O2NvbG9yOiAjNjU2NTY1O2ZvbnQtd2VpZ2h0OiBub3JtYWw7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Ij48aW1nIGFsdD0iSW5zdGFncmFtIiBjbGFzcz0iZmx1aWQiIGhlaWdodD0iNDAiIHNyYz0iaHR0cHM6Ly9zZW5keS5zZWN1cmx5LmNvbS91cGxvYWRzLzE2MDg3MTc1MjQucG5nIiB3aWR0aD0iNDAiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7Ym9yZGVyOiAwO2hlaWdodDogYXV0byAhaW1wb3J0YW50O291dGxpbmU6IG5vbmU7dGV4dC1kZWNvcmF0aW9uOiBub25lOy1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IGJpY3ViaWM7Ij48L2E-PC90ZD4NCgkJCQkJCQkJCTx0ZCBhbGlnbj0iY2VudGVyIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-PGEgaHJlZj0ibWFpbHRvOnNhbGVzQHNlY3VybHkuY29tIiB0aXRsZT0iRW1haWwiIHN0eWxlPSItbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7Y29sb3I6ICM2NTY1NjU7Zm9udC13ZWlnaHQ6IG5vcm1hbDt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsiPjxpbWcgYWx0PSJFbWFpbCIgY2xhc3M9ImZsdWlkIiBoZWlnaHQ9IjQwIiBzcmM9Imh0dHBzOi8vc2VuZHkuc2VjdXJseS5jb20vdXBsb2Fkcy8xNjA4NzE3NTU5LnBuZyIgd2lkdGg9IjQwIiBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO2JvcmRlcjogMDtoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtvdXRsaW5lOiBub25lO3RleHQtZGVjb3JhdGlvbjogbm9uZTstbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljOyI-PC9hPjwvdGQ-DQoJCQkJCQkJCTwvdHI-DQoJCQkJCQkJPC90Ym9keT4NCgkJCQkJCTwvdGFibGU-DQoJCQkJCQk8L3RkPg0KCQkJCQk8L3RyPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQkJPHRkIGhlaWdodD0iMzAiIHN0eWxlPSJmb250LXNpemU6IDFweDtsaW5lLWhlaWdodDogMzBweDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7bXNvLXRhYmxlLWxzcGFjZTogMHB0ICFpbXBvcnRhbnQ7bXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7Ij4mbmJzcDs8L3RkPg0KCQkJCQk8L3RyPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQk8L3RyPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQk8L3RyPg0KCQkJCQk8dHIgc3R5bGU9Ii1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsiPg0KCQkJCQkJPHRkIGFsaWduPSJjZW50ZXIiIHN0eWxlPSJmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlIExUIFBybycsIHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6IDQwMDtmb250LXNpemU6IDEycHg7bGluZS1oZWlnaHQ6IDIwcHg7Y29sb3I6ICM3Njg4OWI7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO21zby1saW5lLWhlaWdodC1ydWxlOiBleGFjdGx5O21zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50O21zby10YWJsZS1yc3BhY2U6IDBwdCAhaW1wb3J0YW50OyI-PGEgaHJlZj0iaHR0cHM6Ly9zZWN1cmx5LnVzMTMubGlzdC1tYW5hZ2UuY29tL3Vuc3Vic2NyaWJlP3U9ZTY5YzIzMWEyODA0NWNiMTBlZTdkOGMxMiZpZD0wN2U0ZDk4MTcwJmU9NGUxZWYzNmUwNSZjPTExOTAwYzM0OWIiIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICM3Njg4OWI7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYmU2ZjA7cGFkZGluZy1ib3R0b206IDNweDstbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7bXNvLWxpbmUtaGVpZ2h0LXJ1bGU6IGV4YWN0bHk7Zm9udC13ZWlnaHQ6IG5vcm1hbDsiPlVuc3Vic2NyaWJlPC9hPjwvdGQ-DQoJCQkJCTwvdHI-DQoJCQkJCTx0ciBzdHlsZT0iLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyI-DQoJCQkJCQk8dGQgaGVpZ2h0PSI0MCIgc3R5bGU9ImZvbnQtc2l6ZTogMXB4O2xpbmUtaGVpZ2h0OiA0MHB4Oy1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTttc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTttc28tdGFibGUtbHNwYWNlOiAwcHQgIWltcG9ydGFudDttc28tdGFibGUtcnNwYWNlOiAwcHQgIWltcG9ydGFudDsiPiZuYnNwOzwvdGQ-DQoJCQkJCTwvdHI-DQoJCQkJPC90Ym9keT4NCgkJCTwvdGFibGU-DQoJCQk8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT4gLS0-PC90ZD4NCgkJPC90cj4NCgk8L3Rib2R5Pg0KPC90YWJsZT4NCjwhLS0gMiBFdmVuID4tLT48L2NlbnRlcj4NCg0KICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgICAgICA8L3Rib2R5PjwvdGFibGU-DQoJCQkJPCEtLVtpZiBtc29dPg0KCQkJCTwvdGQ-DQoJCQkJPCFbZW5kaWZdLS0-DQoNCgkJCQk8IS0tW2lmIG1zb10-DQoJCQkJPC90cj4NCgkJCQk8L3RhYmxlPg0KCQkJCTwhW2VuZGlmXS0tPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgPC90cj4NCiAgICA8L3Rib2R5Pg0KPC90YWJsZT48L3RkPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI-DQogICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPg0KICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVtpZiAoZ3RlIG1zbyA5KXwoSUUpXT4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ-DQogICAgICAgICAgICAgICAgICAgICAgICA8L3RyPg0KICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwhW2VuZGlmXS0tPg0KICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLyBFTkQgVEVNUExBVEUgLS0-DQogICAgICAgICAgICAgICAgICAgIDwvdGQ-DQogICAgICAgICAgICAgICAgPC90cj4NCiAgICAgICAgICAgIDwvdGFibGU-DQogICAgICAgIDwvY2VudGVyPg0KICAgIDxpbWcgc3JjPSJodHRwczovL3NlY3VybHkudXMxMy5saXN0LW1hbmFnZS5jb20vdHJhY2svb3Blbi5waHA_dT1lNjljMjMxYTI4MDQ1Y2IxMGVlN2Q4YzEyJmlkPTExOTAwYzM0OWImZT00ZTFlZjM2ZTA1IiBoZWlnaHQ9IjEiIHdpZHRoPSIxIiBhbHQ9IiI-PC9ib2R5Pg0KPC9odG1sPg=="
            }
          }
        ]
      },
      "sizeEstimate": 78136,
      "historyId": "60723",
      "internalDate": "1684848591000"
    },
    {
      "id": "18848b5effa565b5",
      "threadId": "18848b5effa565b5",
      "labelIds": [
        "UNREAD",
        "IMPORTANT",
        "CATEGORY_UPDATES",
        "INBOX"
      ],
      "snippet": "Hello Pratik, You can make someone&#39;s day with a simple recognition message! Send a &#39;Thank You&#39; to someone who brightened your day or an &#39;Impressive&#39; to someone who did fantastic",
      "payload": {
        "partId": "",
        "mimeType": "multipart/related",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:5dca:0:0:0:0:0 with SMTP id u10csp243798ocp;        Tue, 23 May 2023 06:04:23 -0700 (PDT)"
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ7NOSs2bYW0/CbNSbU3hRXzBG4PbUTB3jDF7q8hS41+QViZ1HKrjIbW6wG5/P/QWzdr/fOt"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:620a:838d:b0:75b:23a0:de8b with SMTP id pb13-20020a05620a838d00b0075b23a0de8bmr3924041qkn.9.1684847062683;        Tue, 23 May 2023 06:04:22 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684847062; cv=none;        d=google.com; s=arc-20160816;        b=0M7Iu1BlWKW3udhEHvrniWkidLuFrCKFmb9qoA94h3DMBuG/Pcfslr9FfljUMvV20o         N/ua9984mDDTDSQVKa7vTNVcqwKwrCK5DFfwo5tLYflFKHDzdqcZIopTo+oJJ5wwCLq1         xsOt2/pBDwFEckUisG/qdFHTL8n8uEmxo820bljEewnJKkmDifXZs/TjQeyi1FvSivIc         4BCP2m/dt+5HoQQQ0EDoV1iV34xYNg1lFeIrWLvXIinvacknKmWAFnqjZIfmqMG4lCdF         o2d5at37b4ZF1y/weL4Dql2pXI0maIy9iusRBIoSiIn0Wae93WjaaYICJIQ9c97RGAna         Vbug=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=content-transfer-encoding:to:mime-version:subject:message-id:from         :date:dkim-signature;        bh=ft30znq4CDPqcpfBTUO4TwY/jvFH3SK6hgOpk2Id0NE=;        b=oOHnLf4iqo53L9CF1zfe8MCNJLBSPgQLHlJgk+AKjGS0jmlt9rzgYXYwupLWQ4TFHV         PNX42j4hBJmPWFIGbbiIoD2H4j1i8mHJX7ywo/KDXdVdhrK+1Ul2w55QAibWOUe2Noxu         0hVYHj8kBnAJZgdfZIchiacqU126YOxqlISYTfnT1sUS1ZhYXDXFB7rXQLrMwNVpw5R1         y/SDn9CrbMv6fDdAJAGs3KoAj62YZs3G0MnNQTEpaSTUnBUp9nrPI6CLjnG7EHBABTfS         FLjXAd3lWpp1vxHEmVt9qGMnGY98WNbxghS2FEiEBMH+AwvV4u7+vHuhQQUO3u/56ljw         ZX3A=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@kudosnow.com header.s=s1 header.b=HalAN5I3;       spf=pass (google.com: domain of bounces+70076-002e-pratik.tiwari=securly.com@em9971.kudosnow.com designates 208.117.49.241 as permitted sender) smtp.mailfrom=\"bounces+70076-002e-pratik.tiwari=securly.com@em9971.kudosnow.com\";       dmarc=pass (p=QUARANTINE sp=NONE dis=NONE) header.from=kudosnow.com"
          },
          {
            "name": "Return-Path",
            "value": "<bounces+70076-002e-pratik.tiwari=securly.com@em9971.kudosnow.com>"
          },
          {
            "name": "Received",
            "value": "from o1.mailer.kudosnow.com (o1.mailer.kudosnow.com. [208.117.49.241])        by mx.google.com with ESMTPS id g1-20020a05620a13c100b0075b26bc1dc8si1183659qkl.656.2023.05.23.06.04.21        for <pratik.tiwari@securly.com>        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);        Tue, 23 May 2023 06:04:22 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of bounces+70076-002e-pratik.tiwari=securly.com@em9971.kudosnow.com designates 208.117.49.241 as permitted sender) client-ip=208.117.49.241;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@kudosnow.com header.s=s1 header.b=HalAN5I3;       spf=pass (google.com: domain of bounces+70076-002e-pratik.tiwari=securly.com@em9971.kudosnow.com designates 208.117.49.241 as permitted sender) smtp.mailfrom=\"bounces+70076-002e-pratik.tiwari=securly.com@em9971.kudosnow.com\";       dmarc=pass (p=QUARANTINE sp=NONE dis=NONE) header.from=kudosnow.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=kudosnow.com; h=from:subject:mime-version:to:content-type:content-transfer-encoding: cc:content-type:from:subject:to; s=s1; bh=ft30znq4CDPqcpfBTUO4TwY/jvFH3SK6hgOpk2Id0NE=; b=HalAN5I3dnHEPSa3GCnSf6ujeaL0eWpRjh5eqtKXc3rGlIG7eRaONvva9m/gL0NtmM8x M6XBChrY+XFN40XX24NJ8C3BtQptytV1aXry7wHZTXdVSg/8TnBvCeJ2MyC5OFajkHsJ7Z pN5Kfgu/XjbwqghzS1Z+A/xTPKWxFDDPKX1zrao9Xu6oovKvcYRWwHA53CLmh5IrLOWs3V fYdQI2BKN8UAZpIUs9hLzfSricosUgTPgedaeeXt4loHXhCvXOEbqWy+eD+IeVhYBLus3R bx0qVRKYAgWiTogwLHJpzqsfqUxbcUmsidMmDAiaWlLQiTwRxBXt5C4eyIlFCjiw=="
          },
          {
            "name": "Received",
            "value": "by filterdrecv-8686869bcf-w6l9j with SMTP id filterdrecv-8686869bcf-w6l9j-1-646CB9D4-F7        2023-05-23 13:04:20.765678918 +0000 UTC m=+1085066.858123679"
          },
          {
            "name": "Received",
            "value": "from kudosnow.com (unknown) by geopod-ismtpd-9 (SG) with ESMTP id iSh2UEXWRQSt43kv2-xNog for <pratik.tiwari@securly.com>; Tue, 23 May 2023 13:04:20.691 +0000 (UTC)"
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 13:04:20 +0000 (UTC)"
          },
          {
            "name": "From",
            "value": "Kudos Notifications <noreply@kudosnow.com>"
          },
          {
            "name": "Message-ID",
            "value": "<646cb9d4745dc_13f8e9c55d9e8309890fa@kudos-sidekiq-legacy-6798f7b87d-4wtjt.mail>"
          },
          {
            "name": "Subject",
            "value": "Make someone’s day!"
          },
          {
            "name": "Mime-Version",
            "value": "1.0"
          },
          {
            "name": "X-SG-EID",
            "value": "/V0EMR7rRF7IWgcEMSU2DRL+/zd38re0C9fMisPlChhB132V6Ko1IeM/nVI4ie4rWgPD9w4Y0Q2uV2ilEd71v0Fz0pqXz8nksC/qPOynM+fZOW2KSDAn9ZvLeYPBAhWM6CnvN2mmcBYJhx1kJtZIGnNQbJlGsStyL9/+P558z4R3MHeUYt9zOhSOq1K2o9ONLB7a2q49wGzxUu8eMhVA98Y7qqfm37MimmiUUzX82WNrlwRo/pozkUyDJ9cdf+Mu/aC5t0vLVm8zynWNR5oh5Q=="
          },
          {
            "name": "X-SG-ID",
            "value": "N2C25iY2uzGMFz6rgvQsb0tlIAmTUv795QAKn0uqSp9FkIJj9JDfEbEuCEIJcdx2k2C2tTKmIrqD11RuX3zzlAdtRoYSwtQoz6hf8AVSOzA="
          },
          {
            "name": "To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "X-Entity-ID",
            "value": "XcAx/hchy+jqu+y4vzhj1w=="
          },
          {
            "name": "Content-Type",
            "value": "multipart/related; boundary=\"--==_mimepart_646cb9d473f04_13f8e9c55d9e830988996\"; charset=UTF-8"
          },
          {
            "name": "Content-Transfer-Encoding",
            "value": "7bit"
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "text/html",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/html; charset=utf-8"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "quoted-printable"
              }
            ],
            "body": {
              "size": 7774,
              "data": "PCFET0NUWVBFIGh0bWw-DQ0KPGh0bWwgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHhtbDpsYW5nPSJlbiIgbGFuZz0iZW4iIGRpcj0ibHRyIj4NDQogIDxoZWFkPg0NCiAgPG1ldGEgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PVVURi04IiBodHRwLWVxdWl2PSJDb250ZW50LVR5cGUiIC8-DQ0KICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0iaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCwgdXNlci1zY2FsYWJsZT1ubyIgLz4NDQoNDQogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyIgbWVkaWE9InNjcmVlbiI-DQ0KICAgIC5oZWFkZXJSb3cgYSwgLnZhbHVlc0Jsb2NrIGF7DQ0KICAgICAgY29sb3I6ICAhaW1wb3J0YW50Ow0NCiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50Ow0NCiAgICB9DQ0KICAgIHAuY29udGVudFRleHR7DQ0KICAgICAgZm9udC1zaXplOjE2cHg7DQ0KICAgICAgY29sb3I6IzMzMzsNDQogICAgICBsaW5lLWhlaWdodDoxNTAlOw0NCiAgICAgIG1hcmdpbjowOw0NCiAgICAgIHBhZGRpbmc6MDsNDQogICAgICBtYXJnaW4tdG9wOjE2cHg7DQ0KICAgICAgbWFyZ2luLWJvdHRvbToxNnB4Ow0NCiAgICB9DQ0KDQ0KICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTI1cHgpew0NCiAgICAgIGJvZHkgPiB0YWJsZXsNDQogICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7DQ0KICAgICAgfQ0NCiAgICAgIC5oZWFkZXJSb3cgPiBzcGFuew0NCiAgICAgICAgZGlzcGxheTpibG9jazsNDQogICAgICAgIGNsZWFyOmJvdGg7DQ0KICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsNDQogICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4Ow0NCiAgICAgIH0NDQogICAgICAuaGVhZGVyUm93IGltZ3sNDQogICAgICAgIGZsb2F0Om5vbmUgIWltcG9ydGFudDsNDQogICAgICAgIG1hcmdpbjogMTBweCBhdXRvICFpbXBvcnRhbnQ7DQ0KICAgICAgICBkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnQ7DQ0KICAgICAgICBhbGlnbjogbm9uZSAhaW1wb3J0YW50Ow0NCiAgICAgIH0NDQogICAgICAub3V0ZXJNYXJnaW57DQ0KICAgICAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50Ow0NCiAgICAgIH0NDQogICAgICAudG9wQm90dG9tTWFyZ2luew0NCiAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7DQ0KICAgICAgfQ0NCiAgICAgIC5wb3dlcmVkQnlLdWRvc3sNDQogICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7DQ0KICAgICAgICBjbGVhcjpib3RoICFpbXBvcnRhbnQ7DQ0KICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50Ow0NCiAgICAgICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDsNDQogICAgICAgIHBhZGRpbmctdG9wOiAzMHB4Ow0NCiAgICAgIH0NDQogICAgICAuYWN0aW9uQXJlYXsNDQogICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7DQ0KICAgICAgICBjbGVhcjpib3RoICFpbXBvcnRhbnQ7DQ0KICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50Ow0NCiAgICAgIH0NDQogICAgICAuaGVhZGVyU3BhY2Vyew0NCiAgICAgICAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7DQ0KICAgICAgfQ0NCiAgICAgIC53ZWVrbHlBY3Rpdml0eU1lc3NhZ2VEYXRlLCAud2Vla2x5QWN0aXZpdHlNZXNzYWdlTGlua3sNDQogICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7DQ0KICAgICAgICBjbGVhcjogYm90aCAhaW1wb3J0YW50Ow0NCiAgICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsNDQogICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7DQ0KICAgICAgfQ0NCiAgICAgIC53ZWVrbHlBY3Rpdml0eU1lc3NhZ2VMaW5rew0NCiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7DQ0KICAgICAgfQ0NCiAgICAgIC53ZWVrbHlBY3Rpdml0eVJlY2VpdmVyc3sNDQogICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7DQ0KICAgICAgfQ0NCiAgICB9DQ0KICA8L3N0eWxlPg0NCg0NCjwvaGVhZD4NDQoNDQogIDxib2R5IHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTY7Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEdlbmV2YSwgc2Fucy1zZXJpZjtmb250LXNpemU6MTVweDtjb2xvcjojNjY2O2xpbmUtaGVpZ2h0OjI0cHg7IiBkaXI9Imx0ciI-DQ0KICAgICAgPHRhYmxlIGhlaWdodD0iNTAiIHdpZHRoPSIxMDAlIiBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCI-DQ0KICAgIDx0cj4NDQogICAgICA8dGQ-Jm5ic3A7PC90ZD4NDQogICAgPC90cj4NDQogIDwvdGFibGU-DQ0KDQ0KICA8dGFibGUgd2lkdGg9IjU4MCIgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiIHN0eWxlPSJtYXJnaW46MCBhdXRvO2JvcmRlcjogMXB4IHNvbGlkICNCMkIyQjI7YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO3dpZHRoOjU4MHB4OyIgZGlyPSJsdHIiPg0NCiAgICA8dHI-DQ0KICA8dGQ-DQ0KICAgIDx0YWJsZSB3aWR0aD0iMTAwJSIgYm9yZGVyPSIwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiPg0NCiAgICAgIDx0cj4NDQogICAgICAgIDx0ZCBoZWlnaHQ9IjQwIiBjbGFzcz0idG9wQm90dG9tTWFyZ2luIj48L3RkPg0NCiAgICAgIDwvdHI-DQ0KICAgICAgPHRyPg0NCiAgICAgICAgPHRkIHdpZHRoPSI0MCIgY2xhc3M9Im91dGVyTWFyZ2luIj4mbmJzcDs8L3RkPg0NCiAgICAgICAgPHRkIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWF4LXdpZHRoOjUwMHB4O2ZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsQXJpYWwsR2VuZXZhLHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OjMwMDsgZm9udC1zaXplOjIwcHg7IGNvbG9yOiAjMDA3M0U2O2xpbmUtaGVpZ2h0OjQ1cHg7IiBjbGFzcz0iaGVhZGVyUm93IiBkaXI9Imx0ciI-DQ0KICAgICAgICAgICAgPGltZyBhbHQ9IldlbGNvbWUgdG8gS3Vkb3MiIGFsaWduPSJsZWZ0IiB2YWxpZ249Im1pZGRsZSIgc3R5bGU9InZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW46IDAgMTBweCAwIDA7bWF4LWhlaWdodDo1MnB4IiBzcmM9ImNpZDo2NDZjYjlkNDcyMTE1XzEzZjhlOWM1NWQ5ZTgzMDk4ODczY0BrdWRvcy1zaWRla2lxLWxlZ2FjeS02Nzk4ZjdiODdkLTR3dGp0Lm1haWwiIC8-DQ0KICAgICAgICAgIDxicj4NDQogICAgICAgIDwvdGQ-DQ0KICAgICAgICA8dGQgd2lkdGg9IjQwIiBjbGFzcz0ib3V0ZXJNYXJnaW4iPiZuYnNwOzwvdGQ-DQ0KICAgICAgPC90cj4NDQogICAgICA8dHI-DQ0KICAgICAgICA8dGQgaGVpZ2h0PSIyNSIgY2xhc3M9ImhlYWRlclNwYWNlciI-PC90ZD4NDQogICAgICA8L3RyPg0NCiAgICA8L3RhYmxlPg0NCiAgPC90ZD4NDQo8L3RyPg0NCg0NCiAgICA8dHI-DQ0KICAgICAgPHRkPg0NCiAgICAgICAgPHRhYmxlIHdpZHRoPSIxMDAlIiBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCI-DQ0KICAgICAgICAgIDx0cj4NDQogICAgICAgICAgICA8dGQgd2lkdGg9IjQwIiBjbGFzcz0ib3V0ZXJNYXJnaW4iPiZuYnNwOzwvdGQ-DQ0KICAgICAgICAgICAgPHRkIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjp0b3A7bWF4LXdpZHRoOjUwMHB4OyIgZGlyPSJsdHIiPg0NCiAgICAgICAgICAgICAgICA8cD4NDQogICAgICAgICAgICAgICAgICA8c3Ryb25nPkhlbGxvIFByYXRpayw8L3N0cm9uZz4NDQogICAgICAgICAgICAgICAgPC9wPg0NCiAgICAgICAgICAgICAgICA8cD4NDQogICAgICAgICAgICAgICAgICBZb3UgY2FuIG1ha2Ugc29tZW9uZSdzIGRheSB3aXRoIGEgc2ltcGxlIHJlY29nbml0aW9uIG1lc3NhZ2UhIFNlbmQgYSAnVGhhbmsgWW91JyB0byBzb21lb25lIHdobyBicmlnaHRlbmVkIHlvdXIgZGF5IG9yIGFuICdJbXByZXNzaXZlJyB0byBzb21lb25lIHdobyBkaWQgZmFudGFzdGljIHdvcmsuPGJyLz48YnIvPkZlZWxpbmcgc2VlbiBhbmQgYXBwcmVjaWF0ZWQgYXQgd29yayBtYXR0ZXJzIGFuZCBmZWVscyBncmVhdC4gTWFrZSBzZW5kaW5nIHJlY29nbml0aW9uIGEgaGFiaXQg4oCTIHRvZGF5J3MgYSBncmVhdCBkYXkgdG8gc3RhcnQuDQ0KICAgICAgICAgICAgICAgIDwvcD4NDQogICAgICAgICAgICA8L3RkPg0NCiAgICAgICAgICAgIDx0ZCB3aWR0aD0iNDAiIGNsYXNzPSJvdXRlck1hcmdpbiI-Jm5ic3A7PC90ZD4NDQogICAgICAgICAgPC90cj4NDQogICAgICAgICAgPHRyPg0NCiAgICAgICAgICAgIDx0ZCB3aWR0aD0iNDAiIGNsYXNzPSJvdXRlck1hcmdpbiI-Jm5ic3A7PC90ZD4NDQogICAgICAgICAgICA8dGQgc3R5bGU9InZlcnRpY2FsLWFsaWduOnRvcDttYXgtd2lkdGg6NTAwcHg7IiBjbGFzcz0iYWN0aW9uc0Jsb2NrIiBkaXI9Imx0ciI-DQ0KICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9IjEwMCUiIGJvcmRlcj0iMCIgY2VsbHNwYWNpbmc9IjAiIGNlbGxwYWRkaW5nPSIwIj4NDQogICAgICAgICAgICAgICAgPHRyPg0NCiAgICAgICAgICAgICAgICAgIDx0ZCBoZWlnaHQ9IjIwIj48L3RkPg0NCiAgICAgICAgICAgICAgICA8L3RyPg0NCiAgICAgICAgICAgICAgICA8dHI-DQ0KICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPSI1MCUiIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjp0b3A7IiBjbGFzcz0iYWN0aW9uQXJlYSIgZGlyPSJsdHIiPg0NCiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSJodHRwOi8vbWFpbGVyLmt1ZG9zbm93LmNvbS9scy9jbGljaz91cG49T04wcmlRbDRCektSN1l2LTJCSU5sT3JqcXZGenFtR0x3S2dLTDRYY1J4ZFpjLTJCbHRxLTJGQUd1RmYtMkJuVlEyaGNBa1J6TkZZZWF6R1hQb0xVemFBSTJSQml3LTJCZDhNY0FROGNEWWxZVVNCWi0yRmstMkJZcy0zRGpDRi1fYUx2S1BreDhXaXpmTWk4c0QwdGFvVTNoUmczMUFTOGlYcmZqOVQzVHctMkZZNGhiVUNBUmtQNWNRdUszNFZVZG13R2NuZEpLdEhkbzlOdkJvRXExcVg3MW44bHo3MFBXemlVVHRhLTJCQTVxMmw5U2p1cmJCandTQk91VnFETTRoMktxeklYMDdMRTVlNTZIN2dvZ0szQk5ObVBkZHFZLTJCNHVmVU5IczZpblVSWkJBenVrTFZ4VlJ5cTZCeWJyRVZVRU9vTUl2bGNGVVB4YzlmTDJvdGdnUExZOXAtMkZ2LTJGZDlMNm41VVM2Nnh0b1N2dTVCRDdqMGVHQ3NuNURqWldNeC0yRnF2VHpoaXVuY0lVem9KNGNUd3pDbmdKcXNVRlBHTmpKQ05ZNE5BNC0yRlZ4d2QtMkZ3LTNEIiBzdHlsZT0iZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOiM4ODg4ODg7cGFkZGluZzoxMHB4IDA7Ym9yZGVyLXJhZGl1czozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6Izk5OTtmb250LXdlaWdodDpib2xkO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEycHg7bWFyZ2luLXJpZ2h0OjVweDsiPjxzcGFuIHN0eWxlPSJjb2xvcjojZmZmOyI-Q2xpY2sgdG8gU3RhcnQgVXNpbmcgS3Vkb3M8L3NwYW4-PC9hPg0NCg0NCiAgICAgICAgICAgICAgICAgIDwvdGQ-DQ0KICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPSI1MCUiIHN0eWxlPSJmb250LXNpemU6MTBweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dmVydGljYWwtYWxpZ246Ym90dG9tO2xpbmUtaGVpZ2h0OjIzcHg7IiBjbGFzcz0icG93ZXJlZEJ5S3Vkb3MiIGRpcj0ibHRyIj4NDQogICAgICAgICAgICAgICAgICAgICAgPGRpdiBhbGlnbj0icmlnaHQiPg0NCiAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtQb3dlcmVkIEJ5Jm5ic3A7DQ0KICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSJLdWRvcyBMb2dvIiBhbGlnbj0iYWJzYm90dG9tIiBzcmM9ImNpZDo2NDZjYjlkNDczNThlXzEzZjhlOWM1NWQ5ZTgzMDk4ODg1NkBrdWRvcy1zaWRla2lxLWxlZ2FjeS02Nzk4ZjdiODdkLTR3dGp0Lm1haWwiIC8-DQ0KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4NDQogICAgICAgICAgICAgICAgICA8L3RkPg0NCiAgICAgICAgICAgICAgICA8L3RyPg0NCiAgICAgICAgICAgICAgPC90YWJsZT4NDQogICAgICAgICAgICA8L3RkPg0NCiAgICAgICAgICAgIDx0ZCB3aWR0aD0iNDAiIGNsYXNzPSJvdXRlck1hcmdpbiI-Jm5ic3A7PC90ZD4NDQogICAgICAgICAgPC90cj4NDQogICAgICAgIDwvdGFibGU-DQ0KICAgICAgPC90ZD4NDQogICAgPC90cj4NDQogICAgPHRyPg0NCiAgICAgIDx0ZCBoZWlnaHQ9IjQwIiBjbGFzcz0idG9wQm90dG9tTWFyZ2luIj48L3RkPg0NCiAgICA8L3RyPg0NCiAgPC90YWJsZT4NDQoNDQogIDx0YWJsZSB3aWR0aD0iNTgwIiBib3JkZXI9IjAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgc3R5bGU9Im1hcmdpbjowIGF1dG87Ij4NDQogICAgPHRyPg0NCiAgICAgIDx0ZCBoZWlnaHQ9IjEwIj4NDQogICAgICAgICZuYnNwOw0NCiAgICAgIDwvdGQ-DQ0KICAgIDwvdHI-DQ0KICAgIDx0cj4NDQogICAgICA8dGQ-DQ0KICAgICAgICA8YSBzdHlsZT0iY29sb3I6Izk5OTsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGZvbnQtc2l6ZTogMTBweDsiIGhyZWY9Imh0dHA6Ly9tYWlsZXIua3Vkb3Nub3cuY29tL2xzL2NsaWNrP3Vwbj1PTjByaVFsNEJ6S1I3WXYtMkJJTmxPcmpxdkZ6cW1HTHdLZ0tMNFhjUnhkWmZzSy0yQkdUWmt5TzQ2VGl6Qy0yQjd5OFVWbzFIelFuRkhqVkExcGkxeC0yQk9VN1p3LTNELTNER2JFWF9hTHZLUGt4OFdpemZNaThzRDB0YW9VM2hSZzMxQVM4aVhyZmo5VDNUdy0yRlk0aGJVQ0FSa1A1Y1F1SzM0VlVkbXdHY25kSkt0SGRvOU52Qm9FcTFxWDcxbjhsejcwUFd6aVVUdGEtMkJBNXEybDlTanVyYkJqd1NCT3VWcURNNGgyS3FzeXk1Unlpd2o5ektXM3B1YU9SWDdubC0yQlNSNXBjdTdvWmpsT3FhbC0yQjJQTS0yRi0yQmp6Q1cwUVNCcER1ZEJCWVhSNU5nTkktMkI5THBMZHR5V1hjQXVXTW5TRFQxWUhaZHZJVXVJYVltQTJ0RVp0VVlMZmFQUWg1WmR1Q3BSRlhEcEluTFIwVHpncW5IaEhzWXBSdTQ2a1lTb2loNFRudkF3OFFUMlQtMkJoN0hoVlpIMjAtM0QiPlVuc3Vic2NyaWJlIG9yIGNoYW5nZSBlbWFpbCBub3RpZmljYXRpb25zPC9hPg0NCiAgICAgIDwvdGQ-DQ0KICAgIDwvdHI-DQ0KICA8L3RhYmxlPg0NCg0NCiAgPGltZyBzcmM9Imh0dHA6Ly9tYWlsZXIua3Vkb3Nub3cuY29tL3dmL29wZW4_dXBuPU5WQjQ5RnpNUnpGVy0yQjZDVmF2dmdELTJGM0FZTkM4YlU0RHVqNzBnVC0yRlo1a0dvTndxTi0yQlQwcmNkTWlDVC0yQjktMkI2QW5lRmxBdGVOTW96NFVJUXlXSzY1VS0yQk9JWnFGWnQ0QjdPVTVXcHNiV2FpbHFRb25rR3F3aXpRbVRicVlQRy0yQlVlVXJ3MWxWbmVZSUNUM1kxWS0yQkE3TEFWbm9FMEZKN3Vzcmt1YXI4RFJadlAwLTJGSm9TZmtKUUI2eXp2WjZWLTJGNkphVVh3QTRyOVlFTC0yQnZSUnBUQU0ySk0zS1A0VXZPS3NDczJ4SDZabUtaUFVFREVzR0VMbWNWeDRzZndUcHVFV2poLTJCTE9YZERWV0pXTVRyMzZ5aURuTnFhYWJhUzItMkJpNlRSOWtOZWlmaXlGQnJ5VS0zRCIgYWx0PSIiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGJvcmRlcj0iMCIgc3R5bGU9ImhlaWdodDoxcHggIWltcG9ydGFudDt3aWR0aDoxcHggIWltcG9ydGFudDtib3JkZXItd2lkdGg6MCAhaW1wb3J0YW50O21hcmdpbi10b3A6MCAhaW1wb3J0YW50O21hcmdpbi1ib3R0b206MCAhaW1wb3J0YW50O21hcmdpbi1yaWdodDowICFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6MCAhaW1wb3J0YW50O3BhZGRpbmctdG9wOjAgIWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbTowICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDowICFpbXBvcnRhbnQ7cGFkZGluZy1sZWZ0OjAgIWltcG9ydGFudDsiLz48L2JvZHk-DQ0KPC9odG1sPg=="
            }
          },
          {
            "partId": "1",
            "mimeType": "image/png",
            "filename": "logo_kudostext.png",
            "headers": [
              {
                "name": "Content-Type",
                "value": "image/png; filename=logo_kudostext.png"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "base64"
              },
              {
                "name": "Content-Disposition",
                "value": "inline; filename=logo_kudostext.png"
              },
              {
                "name": "Content-ID",
                "value": "<646cb9d47358e_13f8e9c55d9e830988856@kudos-sidekiq-legacy-6798f7b87d-4wtjt.mail>"
              }
            ],
            "body": {
              "attachmentId": "ANGjdJ9F-Ou71WeMwPvS5LL7_hSWfueGNESYaxtLBytBmOHWKz74CPn8Pw376x1QTQOjS486ijWePpESO5IVE2A5tUfaSMI-58E8eIy9CFDwyp8FIFJHVv2Iem9sCn-vi4yNjWzLLGSffG3hkzhuKGRaVmxNpObIl7AjRjBtrpJgxL6JobEw1-LfNmTIsqQkUsE2wHL_8aimHoysLG7YUQiO3-65GpZYTw7yc6w8uBEyyzyg9rmCrGl5s7ow7tCUTOcUj7crqXKrSb97X_W4EMP97azJhCHPoPMrpzTOZOVOpL6amCSTmMO_w9EzVTEL05T0-WuzngirjW74Wg2OVqjugkhNPvWNuKE0o7d36QWrGsI8EIXIBYfwWQGIkws1hWrO7en9DiHicYCSjOzM",
              "size": 1354
            }
          },
          {
            "partId": "2",
            "mimeType": "image/png",
            "filename": "company_logo.png",
            "headers": [
              {
                "name": "Content-Type",
                "value": "image/png; filename=company_logo.png"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "base64"
              },
              {
                "name": "Content-Disposition",
                "value": "inline; filename=company_logo.png"
              },
              {
                "name": "Content-ID",
                "value": "<646cb9d472115_13f8e9c55d9e83098873c@kudos-sidekiq-legacy-6798f7b87d-4wtjt.mail>"
              }
            ],
            "body": {
              "attachmentId": "ANGjdJ-cqKR_0ZB_UzY9NXk145qFCt4SRj1sPmRj6Ithy2CsJpqE_em7uEJ3Maqv_fR9MUJA7j_4VYX7jU2mLcHyyz-EEDf2yNU41b04-MlaVokDSFMtYb1Snvg2GX2Od1igTnfRw-b_9u-TGDi4c7jBWFwmqvaWubiRg6SvY-heTWbOPO7zQDp-4af1AlJVHCyF42gI-nL3fn66x0uj-VY6qtimOGnVnf-sQqj3dmcHfl71sdqexpoUE7i3AI98XoI3ksF42rCZ-EGeTlEO5v_TcYaSb9H9y9GrfO_jdryb8Pp-kpb3-43USGMdr4OoPOrzpTW5m60XZfVAavFDtf_4nHcmCnjK8LewpfDqs5asFjVGTEojN8wjLARUpuZI5mM_nxHvujhhvdJeryg5",
              "size": 1874
            }
          }
        ]
      },
      "sizeEstimate": 18835,
      "historyId": "60722",
      "internalDate": "1684847060000"
    },
    {
      "id": "18847f990a424744",
      "threadId": "18847f990a424744",
      "labelIds": [
        "UNREAD",
        "IMPORTANT",
        "CATEGORY_FORUMS",
        "INBOX"
      ],
      "snippet": "Securly Nilesh Patil Software Engineer Hi, I am Nilesh and I joined the Pune office as a Software Engineer today. I have been working in web application development for the past 6.5 years. I love",
      "payload": {
        "partId": "",
        "mimeType": "text/html",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:5dca:0:0:0:0:0 with SMTP id u10csp145033ocp;        Tue, 23 May 2023 02:38:38 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a25:d64c:0:b0:b9a:6cb6:b942 with SMTP id n73-20020a25d64c000000b00b9a6cb6b942mr15021394ybg.54.1684834718084;        Tue, 23 May 2023 02:38:38 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=3; a=rsa-sha256; t=1684834718; cv=pass;        d=google.com; s=arc-20160816;        b=rfvy+R+gej3IK30I6W+Wh5UKP4UDJPRO0hNaTCETyV83hZNa02AMsdtwRVBoRk5F3J         jsSUsqejqsR5SoqPmoAKmTH5yRdcrJbjfcZjxB9edm15UpbRodZeEkbemwqjlVVNqzQh         FJ6zO861NoeKpp9Cy5wprM7aYzUf0FBreoPw/p31ntZnykFG5H3Hin1cwTddADcBkBix         siUx2sCIM5z2PkF39tZt2g12AfUr/YBIEXT93YoAfBKAPO8g80lvnS52rEkF2xA1tj9a         YdyHldcLqTUyg0EO5GJ+N1m0D09dp8bPpV0gDORgnssW3ny6rPatfPKMguHuXZsR49RK         zUNw=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=3; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=list-subscribe:list-archive:list-help:list-post:list-id         :mailing-list:precedence:feedback-id:mime-version:list-unsubscribe         :message-id:subject:reply-to:from:to:date:dkim-signature;        bh=Q95FO/09bSqTL3mValJC/XLQpZ2dMO4i6ac/3IVqxdE=;        b=LC68iovT42wsFGCmPURJMvcbr/sE1kVFTrnqkoaaTy4bexMrOQ3ZAFgLKfXZlJcZoB         vDYdlWUEAtJ7Bxu7+O3BBCZRv9doChNbEOvTv14on9IUz2E7yLDV0sqF6LhhNch3YQg5         parz/CxX0wNQ3YTEWPJJJ61yeo7d+nAUUQaZWBJ5aUW1yXKMJf1gIpz1ALwBMNlxUX7P         Uk4yGCqda5FAyIiAyTcaeXQf4BgAMF6IJRHCiGFTk3Ul8FoZogrTxWaksCD7iZtCpYc6         /O/oMTCdjVwf8UpDCg299yH/i0I7DPDsKVOoQ4hj1ltS5KexbOZ9KRMf2jvBI1JLIqOn         SLOA=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=3; mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=PX1UdqU+;       arc=pass (i=2 spf=pass spfdomain=us-west-2.amazonses.com dkim=pass dkdomain=securly.com dkim=pass dkdomain=amazonses.com dmarc=pass fromdomain=securly.com);       spf=pass (google.com: domain of every+bncbd765xvjyekrbcetwkrqmgqeiturvby@securly.com designates 209.85.220.69 as permitted sender) smtp.mailfrom=every+bncBD765XVJYEKRBCETWKRQMGQEITURVBY@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Return-Path",
            "value": "<every+bncBD765XVJYEKRBCETWKRQMGQEITURVBY@securly.com>"
          },
          {
            "name": "Received",
            "value": "from mail-sor-f69.google.com (mail-sor-f69.google.com. [209.85.220.69])        by mx.google.com with SMTPS id 81-20020a251654000000b00ba733412283sor4681267ybw.8.2023.05.23.02.38.37        for <pratik.tiwari@securly.com>        (Google Transport Security);        Tue, 23 May 2023 02:38:38 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of every+bncbd765xvjyekrbcetwkrqmgqeiturvby@securly.com designates 209.85.220.69 as permitted sender) client-ip=209.85.220.69;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=PX1UdqU+;       arc=pass (i=2 spf=pass spfdomain=us-west-2.amazonses.com dkim=pass dkdomain=securly.com dkim=pass dkdomain=amazonses.com dmarc=pass fromdomain=securly.com);       spf=pass (google.com: domain of every+bncbd765xvjyekrbcetwkrqmgqeiturvby@securly.com designates 209.85.220.69 as permitted sender) smtp.mailfrom=every+bncBD765XVJYEKRBCETWKRQMGQEITURVBY@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "ARC-Seal",
            "value": "i=2; a=rsa-sha256; t=1684834717; cv=pass;        d=google.com; s=arc-20160816;        b=yjamLV/8tJSHC3QwS/8mGxTgsQ0Bbqb3xvCUc1f3lmhzdkbB+7R3uZz8jBOqhLd1xi         KNliUrfNVo0MV4j0YQ5rtD8pu87LojbZhbS4h+GOfEmalKFoExJVsqVkEXtBkVggIiCM         bOi9+swDRAfWSKMxss2Cql8J9l2GmXPAWG0e/G5lvnInQDK7o5XAW0UH5NzV3pPnE3ow         rbMvWLtk6J2v3j9YCU1afiP0kaytrOe77XTEUUCb1vlK1ApToouk4jme4I1hN0t4D8pq         IT3xxrQ6I1HZnSLcHHa4SZqc0swj8lfl4oyHZsOchLQRYxPcv2RLXkLjyVeLfzyICOaR         p87w=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=2; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=list-subscribe:list-archive:list-help:list-post:list-id         :mailing-list:precedence:feedback-id:mime-version:list-unsubscribe         :message-id:subject:reply-to:from:to:date:dkim-signature;        bh=Q95FO/09bSqTL3mValJC/XLQpZ2dMO4i6ac/3IVqxdE=;        b=QkZqXbVqsvTMdfo93sbqsB8qA9woy7GETij1phzXwyg7YI1joGFB6Ao5k4GKVrSuS3         UfcFy7WzwmGz6w5tFawDWJMwg2MGqAtw3FhXhBboskYCjEfiy4PThFQawZS0T8xKmMGM         u/yi5Gza4lEb63Obvx7bD57YeTq2V79Uujc8mL6kczhiOPG6HtDTvEbVFDEu/vrweBgh         NqToKMgrNeYvKC/J73yEvJsVHvvozibT3PvwERfyDJx8u9vlPi00ub798hsUtc9Kl8bD         EZr243mwpZTSHL6B7jRn7ysdInxxQFAJGk+l+uv0ET/mKWN9DfYSVnxYL7FWSVnQBgYu         701w=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=2; mx.google.com;       dkim=pass header.i=@securly.com header.s=eahnr753de64gnwz2lmmqqye3mn2hlim header.b=JTVz18bl;       dkim=pass header.i=@amazonses.com header.s=hsbnp7p3ensaochzwyq5wwmceodymuwv header.b=NGytks5B;       spf=pass (google.com: domain of 0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com designates 54.240.27.97 as permitted sender) smtp.mailfrom=0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=securly.com; s=google; t=1684834717; x=1687426717;        h=list-subscribe:list-archive:list-help:list-post:list-id         :mailing-list:precedence:x-original-authentication-results         :x-original-sender:feedback-id:mime-version:list-unsubscribe         :message-id:subject:reply-to:from:to:date:from:to:cc:subject:date         :message-id:reply-to;        bh=Q95FO/09bSqTL3mValJC/XLQpZ2dMO4i6ac/3IVqxdE=;        b=PX1UdqU+Gh0GWfTOABC7lm5yAXisE/xnQrxXIrdRQFbUcsC6QfdXVij4HfCrPycxvG         9/XReP3GAtdO4fPRS7HZy0uh9vYUL8Gxiy0QUkS5fYbz1jADsaeusNwGmuu+bK5Y7PnV         2ygTTnBGGMPCpk89iNmQ+j5Q3hECY3ZIOvSGgFM4ojEdLnNMn959WlKGT+NOQm+/d8xq         Uec2ut/R1nWg3ANxSmaCjKKCQbP4hJQMK99KB/6E1JnJPYQQ9J/ro9QbdK2/O+LJovWA         KwtX6Hvx+H+DqAn0tvfJ1biYhzAO5SvZQvHFvfIFqz0nXgz1BuRAG2lFYKQnf3TbieRv         y7+g=="
          },
          {
            "name": "X-Google-DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20221208; t=1684834717; x=1687426717;        h=list-subscribe:list-archive:list-help:list-post         :x-spam-checked-in-group:list-id:mailing-list:precedence         :x-original-authentication-results:x-original-sender:feedback-id         :mime-version:list-unsubscribe:message-id:subject:reply-to:from:to         :date:x-beenthere:x-beenthere:x-gm-message-state:from:to:cc:subject         :date:message-id:reply-to;        bh=Q95FO/09bSqTL3mValJC/XLQpZ2dMO4i6ac/3IVqxdE=;        b=fyuz9rfpkbCqiuzHOAr9Shzlr/TTpLSfGjzPAgRoMz1n2KR+MyD/8vxGRhJhIrM150         Lsa9FEp0teiiHZoUPdyaraV11mi2/sHJdEYPPWCdzTHtE2dNE2X6HBu9CvGT7QKx591Y         OF+xDLtcUVrdgrd5jo6l+69air2kO1EQcr9bw9FX+ObtRcawtJjzw8iowWV5/cT3ZYXf         a/81MFBdZdrEZXUQicHRYZzTjJ/H4Y5u0bUqdSLZRv0UKs9zuymbokuTvctqrULrfaFm         YKbrYJdtVnTFP8RR2HCUN5cXiBTR22G2L7WuM+YeolHEYN/jG8pGyXyuc7Ivxgdyl/5y         GEUQ=="
          },
          {
            "name": "X-Gm-Message-State",
            "value": "AC+VfDxrd42RusSFCMt9P7I7m5ufqiJ7kowk4qQb3NnwkgtS7BjOr1rf aTPouFCyVsHZD3To7nYqiZ1HtFh4"
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ4RLH/cyByNNMw5lKkKWpVkEiQ9wpmEKJ6haiaIYj3Kat8Rku5k6oEqVGgZh07Eoc70fPKGSw=="
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6a00:1a15:b0:64d:1185:2412 with SMTP id g21-20020a056a001a1500b0064d11852412mr5607068pfv.2.1684834697094;        Tue, 23 May 2023 02:38:17 -0700 (PDT)"
          },
          {
            "name": "X-BeenThere",
            "value": "every@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:a17:90a:9b8c:b0:253:8540:8c9c with SMTP id g12-20020a17090a9b8c00b0025385408c9cls4318665pjp.1.-pod-prod-09-us; Tue, 23 May 2023 02:38:16 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a63:755:0:b0:534:6929:8ff5 with SMTP id 82-20020a630755000000b0053469298ff5mr3169939pgh.10.1684834695861;        Tue, 23 May 2023 02:38:15 -0700 (PDT)"
          },
          {
            "name": "X-BeenThere",
            "value": "all@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:a17:902:e9d5:b0:1a2:1938:267d with SMTP id 21-20020a170902e9d500b001a21938267dls4301740plk.0.-pod-prod-09-us; Tue, 23 May 2023 02:38:15 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a17:902:710b:b0:1ac:7245:ba5a with SMTP id a11-20020a170902710b00b001ac7245ba5amr10372130pll.61.1684834694833;        Tue, 23 May 2023 02:38:14 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684834694; cv=none;        d=google.com; s=arc-20160816;        b=jtZ3e2nYGHXbaKGIRwj43Vjn8Ga3Z3bhk6M4R3n2QXAbytxzz+vCko5C56lIW3UB/+         Rvl1to00nBRodwqgkHEnRBpdrWjTOEbr3+jl5NH69qiPWOQUf3dzsYmcI4Sef4x/HWD6         iXLH7jsI2NCnp4y8Vav0wCmF2lUuUzNU1SToaTYOCsexDjG7K5a/JbJnuyYy4Cwf8wy7         /Q2Xc+XSDWd/DLMAcZr/s9YicalxM7r6bQEuiLXJ3YYYhgYrkeLQYhvgaoBbu5qZELRS         Id/pPMYLlvKXqHROS8MX4yrgT3HvjA8ccDe1ziqrfVESQAkT2LfOryYKucBrzPkX8eXE         drUw=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=feedback-id:mime-version:list-unsubscribe:message-id:subject         :reply-to:from:to:date:dkim-signature:dkim-signature;        bh=Q95FO/09bSqTL3mValJC/XLQpZ2dMO4i6ac/3IVqxdE=;        b=xBK9clSkA5KRIoXptj79JNchox34hr7hrVPQ8J8tE/I2X1YsIAzPPXH3xV2Q+U4Mgl         wNZcs95Bxo30+BhqbecPjC0OCsjkFIfND0VIx0tj+bOGLP13VYeh0R4WGPDovr2ndKyc         MF3tdBHqQsHcMVoN4sCWrcxSb/XC8eqtExGQsmo20KDh5zqI5gFN6jML1rAfaSdN5wBg         F3AwAznjGnUY/DdF3tlLD5g8M6qe+afoN6CcRs9kaOo9cUvh0dy1Lu85DgU98btjdaJ2         GzOB1wKTg1d+qBa32Cco5Qtqfhq8aW9dALrA6QlFKgPgy+RDFC20maaWRRViALPj/R6v         6DxA=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@securly.com header.s=eahnr753de64gnwz2lmmqqye3mn2hlim header.b=JTVz18bl;       dkim=pass header.i=@amazonses.com header.s=hsbnp7p3ensaochzwyq5wwmceodymuwv header.b=NGytks5B;       spf=pass (google.com: domain of 0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com designates 54.240.27.97 as permitted sender) smtp.mailfrom=0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Received",
            "value": "from a27-97.smtp-out.us-west-2.amazonses.com (a27-97.smtp-out.us-west-2.amazonses.com. [54.240.27.97])        by mx.google.com with ESMTPS id 1-20020a170902c24100b001ac62935789si788463plg.468.2023.05.23.02.38.14        for <all@securly.com>        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Tue, 23 May 2023 02:38:14 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of 0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com designates 54.240.27.97 as permitted sender) client-ip=54.240.27.97;"
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 09:38:14 +0000"
          },
          {
            "name": "To",
            "value": "all@securly.com"
          },
          {
            "name": "From",
            "value": "Shreyas Moghe <shreyas@securly.com>"
          },
          {
            "name": "Reply-To",
            "value": "Shreyas Moghe <noreply@securly.com>"
          },
          {
            "name": "Subject",
            "value": "Welcome to the team, Nilesh!"
          },
          {
            "name": "Message-ID",
            "value": "<0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com>"
          },
          {
            "name": "X-Mailer",
            "value": "Sendy (https://sendy.co)"
          },
          {
            "name": "List-Unsubscribe",
            "value": "<mailto:googlegroups-manage+240655411456+unsubscribe@googlegroups.com>, <https://groups.google.com/a/securly.com/group/every/subscribe>"
          },
          {
            "name": "MIME-Version",
            "value": "1.0"
          },
          {
            "name": "Content-Type",
            "value": "text/html; charset=UTF-8"
          },
          {
            "name": "Feedback-ID",
            "value": "1.us-west-2.2zbgEanlSanWva8/QClvl3MXNr/ESTi0tMfIDuoS4ko=:AmazonSES"
          },
          {
            "name": "X-SES-Outgoing",
            "value": "2023.05.23-54.240.27.97"
          },
          {
            "name": "X-Original-Sender",
            "value": "shreyas@securly.com"
          },
          {
            "name": "X-Original-Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=eahnr753de64gnwz2lmmqqye3mn2hlim header.b=JTVz18bl;       dkim=pass header.i=@amazonses.com header.s=hsbnp7p3ensaochzwyq5wwmceodymuwv header.b=NGytks5B;       spf=pass (google.com: domain of 0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com designates 54.240.27.97 as permitted sender) smtp.mailfrom=0101018847f9341b-642bfb23-64e5-4464-9777-afea06e78099-000000@us-west-2.amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Precedence",
            "value": "list"
          },
          {
            "name": "Mailing-list",
            "value": "list every@securly.com; contact every+owners@securly.com"
          },
          {
            "name": "List-ID",
            "value": "<every.securly.com>"
          },
          {
            "name": "X-Spam-Checked-In-Group",
            "value": "all@securly.com"
          },
          {
            "name": "X-Google-Group-Id",
            "value": "240655411456"
          },
          {
            "name": "List-Post",
            "value": "<https://groups.google.com/a/securly.com/group/every/post>, <mailto:every@securly.com>"
          },
          {
            "name": "List-Help",
            "value": "<https://support.google.com/a/securly.com/bin/topic.py?topic=25838>, <mailto:every+help@securly.com>"
          },
          {
            "name": "List-Archive",
            "value": "<https://groups.google.com/a/securly.com/group/every/>"
          },
          {
            "name": "List-Subscribe",
            "value": "<https://groups.google.com/a/securly.com/group/every/subscribe>, <mailto:every+subscribe@securly.com>"
          }
        ],
        "body": {
          "size": 13377,
          "data": "PCFET0NUWVBFIGh0bWw-DQo8aHRtbCBsYW5nPSJlbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHhtbG5zOm89InVybjpzY2hlbWFzLW1pY3Jvc29mdC1jb206b2ZmaWNlOm9mZmljZSIgeG1sbnM6dj0idXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWwiPg0KPGhlYWQ-PG1ldGEgY2hhcnNldD0idXRmLTgiPjwhLS0gdXRmLTggd29ya3MgZm9yIG1vc3QgY2FzZXMgLS0-PG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCI-PCEtLSBGb3JjaW5nIGluaXRpYWwtc2NhbGUgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSAtLT48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UiPjwhLS0gVXNlIHRoZSBsYXRlc3QgKGVkZ2UpIHZlcnNpb24gb2YgSUUgcmVuZGVyaW5nIGVuZ2luZSAtLT48bWV0YSBuYW1lPSJ4LWFwcGxlLWRpc2FibGUtbWVzc2FnZS1yZWZvcm1hdHRpbmciPjwhLS0gRGlzYWJsZSBhdXRvLXNjYWxlIGluIGlPUyAxMCBNYWlsIGVudGlyZWx5IC0tPg0KCTx0aXRsZT5TZWN1cmx5PC90aXRsZT4NCgk8IS0tIFRoZSB0aXRsZSB0YWcgc2hvd3MgaW4gZW1haWwgbm90aWZpY2F0aW9ucywgbGlrZSBBbmRyb2lkIDQuNC4gLS0-PCEtLSBXZWIgRm9udCAvIEBmb250LWZhY2UgOiBCRUdJTiAtLT48IS0tIE5PVEU6IElmIHdlYiBmb250cyBhcmUgbm90IHJlcXVpcmVkLCBsaW5lcyAxMCAtIDI3IGNhbiBiZSBzYWZlbHkgcmVtb3ZlZC4gLS0-PCEtLSBEZXNrdG9wIE91dGxvb2sgY2hva2VzIG9uIHdlYiBmb250IHJlZmVyZW5jZXMgYW5kIGRlZmF1bHRzIHRvIFRpbWVzIE5ldyBSb21hbiwgc28gd2UgZm9yY2UgYSBzYWZlIGZhbGxiYWNrIGZvbnQuIC0tPjwhLS1baWYgbXNvXT4NCiAgICAgICAgPHN0eWxlPg0KICAgICAgICAgICAgKiB7DQogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgIWltcG9ydGFudDsNCiAgICAgICAgICAgIH0NCiAgICAgICAgPC9zdHlsZT4NCiAgICA8IVtlbmRpZl0tLT48IS0tIEFsbCBvdGhlciBjbGllbnRzIGdldCB0aGUgd2ViZm9udCByZWZlcmVuY2U7IHNvbWUgd2lsbCByZW5kZXIgdGhlIGZvbnQgYW5kIG90aGVycyB3aWxsIHNpbGVudGx5IGZhaWwgdG8gdGhlIGZhbGxiYWNrcy4gTW9yZSBvbiB0aGF0IGhlcmU6IGh0dHA6Ly9zdHlsZWNhbXBhaWduLmNvbS9ibG9nLzIwMTUvMDIvd2ViZm9udC1zdXBwb3J0LWluLWVtYWlsLyAtLT48IS0tW2lmICFtc29dPjwhLS0-PCEtLSBpbnNlcnQgd2ViIGZvbnQgcmVmZXJlbmNlLCBlZzogPGxpbmsgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M_ZmFtaWx5PVJvYm90bzo0MDAsNzAwJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz4gLS0-PCEtLTwhW2VuZGlmXS0tPjwhLS0gV2ViIEZvbnQgLyBAZm9udC1mYWNlIDogRU5EIC0tPjwhLS0gQ1NTIFJlc2V0IDogQkVHSU4gLS0-DQoJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4vKiBXaGF0IGl0IGRvZXM6IFJlbW92ZSBzcGFjZXMgYXJvdW5kIHRoZSBlbWFpbCBkZXNpZ24gYWRkZWQgYnkgc29tZSBlbWFpbCBjbGllbnRzLiAqLw0KICAgICAgICAvKiBCZXdhcmU6IEl0IGNhbiByZW1vdmUgdGhlIHBhZGRpbmcgLyBtYXJnaW4gYW5kIGFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGNvbXBvc2UgYSByZXBseSB3aW5kb3cuICovDQoNCiAgICAgICAgaHRtbCwNCiAgICAgICAgYm9keSB7DQogICAgICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7DQogICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50Ow0KICAgICAgICB9DQoNCiAgICAgICAgLyogV2hhdCBpdCBkb2VzOiBTdG9wcyBlbWFpbCBjbGllbnRzIHJlc2l6aW5nIHNtYWxsIHRleHQuICovDQoNCiAgICAgICAgKiB7DQogICAgICAgICAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsNCiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsNCiAgICAgICAgfQ0KDQogICAgICAgIC8qIFdoYXQgaXQgZG9lczogQ2VudGVycyBlbWFpbCBvbiBBbmRyb2lkIDQuNCAqLw0KDQogICAgICAgIGRpdltzdHlsZSo9Im1hcmdpbjogMTZweCAwIl0gew0KICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7DQogICAgICAgIH0NCg0KICAgICAgICAvKiBXaGF0IGl0IGRvZXM6IFN0b3BzIE91dGxvb2sgZnJvbSBhZGRpbmcgZXh0cmEgc3BhY2luZyB0byB0YWJsZXMuICovDQoNCiAgICAgICAgdGFibGUsDQogICAgICAgIHRkIHsNCiAgICAgICAgICAgIG1zby10YWJsZS1sc3BhY2U6IDBwdCAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgbXNvLXRhYmxlLXJzcGFjZTogMHB0ICFpbXBvcnRhbnQ7DQogICAgICAgIH0NCg0KICAgICAgICAvKiBXaGF0IGl0IGRvZXM6IEZpeGVzIHdlYmtpdCBwYWRkaW5nIGlzc3VlLiBGaXggZm9yIFlhaG9vIG1haWwgdGFibGUgYWxpZ25tZW50IGJ1Zy4gQXBwbGllcyB0YWJsZS1sYXlvdXQgdG8gdGhlIGZpcnN0IDIgdGFibGVzIHRoZW4gcmVtb3ZlcyBmb3IgYW55dGhpbmcgbmVzdGVkIGRlZXBlci4gKi8NCg0KICAgICAgICB0YWJsZSB7DQogICAgICAgICAgICBib3JkZXItc3BhY2luZzogMCAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZCAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsNCiAgICAgICAgfQ0KDQogICAgICAgIHRhYmxlLmxlZnQtYWxpZ24gew0KICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAwICFpbXBvcnRhbnQ7DQogICAgICAgIH0NCg0KICAgICAgICB0YWJsZSB0YWJsZSB0YWJsZSB7DQogICAgICAgICAgICB0YWJsZS1sYXlvdXQ6IGF1dG87DQogICAgICAgIH0NCg0KICAgICAgICAvKiBXaGF0IGl0IGRvZXM6IFVzZXMgYSBiZXR0ZXIgcmVuZGVyaW5nIG1ldGhvZCB3aGVuIHJlc2l6aW5nIGltYWdlcyBpbiBJRS4gKi8NCg0KICAgICAgICBpbWcgew0KICAgICAgICAgICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogYmljdWJpYzsNCiAgICAgICAgfQ0KDQogICAgICAgIC8qIFdoYXQgaXQgZG9lczogQSB3b3JrLWFyb3VuZCBmb3IgZW1haWwgY2xpZW50cyBtZWRkbGluZyBpbiB0cmlnZ2VyZWQgbGlua3MuICovDQoNCiAgICAgICAgKlt4LWFwcGxlLWRhdGEtZGV0ZWN0b3JzXSwNCiAgICAgICAgLyogaU9TICovDQoNCiAgICAgICAgLngtZ21haWwtZGF0YS1kZXRlY3RvcnMsDQogICAgICAgIC8qIEdtYWlsICovDQoNCiAgICAgICAgLngtZ21haWwtZGF0YS1kZXRlY3RvcnMgKiwNCiAgICAgICAgLmFCbiB7DQogICAgICAgICAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7DQogICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDsNCiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7DQogICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDsNCiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDsNCiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7DQogICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50Ow0KICAgICAgICB9DQoNCiAgICAgICAgLyogV2hhdCBpdCBkb2VzOiBQcmV2ZW50cyBHbWFpbCBmcm9tIGRpc3BsYXlpbmcgYW4gZG93bmxvYWQgYnV0dG9uIG9uIGxhcmdlLCBub24tbGlua2VkIGltYWdlcy4gKi8NCg0KICAgICAgICAuYTZTIHsNCiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsNCiAgICAgICAgICAgIG9wYWNpdHk6IDAuMDEgIWltcG9ydGFudDsNCiAgICAgICAgfQ0KDQogICAgICAgIC8qIElmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmssIGFkZCBhIC5nLWltZyBjbGFzcyB0byBhbnkgaW1hZ2UgaW4gcXVlc3Rpb24uICovDQoNCiAgICAgICAgaW1nLmctaW1nK2RpdiB7DQogICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7DQogICAgICAgIH0NCg0KICAgICAgICAvKiBXaGF0IGl0IGRvZXM6IFByZXZlbnRzIHVuZGVybGluaW5nIHRoZSBidXR0b24gdGV4dCBpbiBXaW5kb3dzIDEwICovDQoNCiAgICAgICAgLmJ1dHRvbi1saW5rIHsNCiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50Ow0KICAgICAgICB9DQoNCiAgICAgICAgLyogV2hhdCBpdCBkb2VzOiBSZW1vdmVzIHJpZ2h0IGd1dHRlciBpbiBHbWFpbCBpT1MgYXBwOiBodHRwczovL2dpdGh1Yi5jb20vVGVkR29hcy9DZXJiZXJ1cy9pc3N1ZXMvODkgICovDQogICAgICAgIC8qIENyZWF0ZSBvbmUgb2YgdGhlc2UgbWVkaWEgcXVlcmllcyBmb3IgZWFjaCBhZGRpdGlvbmFsIHZpZXdwb3J0IHNpemUgeW91J2QgbGlrZSB0byBmaXggKi8NCiAgICAgICAgLyogVGhhbmtzIHRvIEVyaWMgTGVwZXRpdCAoQGVyaWNsZXBldGl0c2YpIGZvciBoZWxwIHRyb3VibGVzaG9vdGluZyAqLw0KCTwvc3R5bGU-DQoJPCEtLSBDU1MgUmVzZXQgOiBFTkQgLS0-PCEtLSBQcm9ncmVzc2l2ZSBFbmhhbmNlbWVudHMgOiBCRUdJTiAtLT4NCgk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi8qIFdoYXQgaXQgZG9lczogSG92ZXIgc3R5bGVzIGZvciBidXR0b25zICovDQoNCiAgICAgICAgLmJ1dHRvbi10ZCwNCiAgICAgICAgLmJ1dHRvbi1hLA0KICAgICAgICAuYnV0dG9uLXRkLWRhcmssDQogICAgICAgIC5idXR0b24tYS1kYXJrIHsNCiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluOw0KICAgICAgICB9DQoNCiAgICAgICAgLmJ1dHRvbi10ZC1kYXJrOmhvdmVyLA0KICAgICAgICAuYnV0dG9uLWEtZGFyazpob3ZlciB7DQogICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1ICFpbXBvcnRhbnQ7DQogICAgICAgIH0NCg0KICAgICAgICAuYnV0dG9uLXRkOmhvdmVyIHNwYW4sDQogICAgICAgIC5idXR0b24tYTpob3ZlciBzcGFuIHsNCiAgICAgICAgICAgIGNvbG9yOiAjNDI2ZWZmICFpbXBvcnRhbnQ7DQogICAgICAgIH0NCg0KICAgICAgICAvKiBNZWRpYSBRdWVyaWVzICovDQoNCiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHsNCg0KICAgICAgICAgICAgLmVtYWlsLWNvbnRhaW5lciwNCiAgICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIHsNCiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICAuZm9vdGVyLWNvbnRhaW5lciB7DQogICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBpbmhlcml0ICFpbXBvcnRhbnQ7DQogICAgICAgICAgICB9DQoNCiAgICAgICAgICAgIC8qIFdoYXQgaXQgZG9lczogRm9yY2VzIGVsZW1lbnRzIHRvIHJlc2l6ZSB0byB0aGUgZnVsbCB3aWR0aCBvZiB0aGVpciBjb250YWluZXIuIFVzZWZ1bCBmb3IgcmVzaXppbmcgaW1hZ2VzIGJleW9uZCB0aGVpciBtYXgtd2lkdGguICovDQogICAgICAgICAgICAuZmx1aWQgew0KICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7DQogICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7DQogICAgICAgICAgICB9DQoNCiAgICAgICAgICAgIC8qIFdoYXQgaXQgZG9lczogRm9yY2VzIHRhYmxlIGNlbGxzIGludG8gZnVsbC13aWR0aCByb3dzLiAqLw0KICAgICAgICAgICAgLnN0YWNrLWNvbHVtbiwNCiAgICAgICAgICAgIC5zdGFjay1jb2x1bW4tY2VudGVyIHsNCiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7DQogICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7DQogICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHIgIWltcG9ydGFudDsNCiAgICAgICAgICAgIH0NCg0KICAgICAgICAgICAgLyogLmFkZC1tYi1tb2JpbGUgew0KICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDsNCiAgICAgICAgICAgIH0gKi8NCiAgICAgICAgICAgIC8qIEFuZCBjZW50ZXIganVzdGlmeSB0aGVzZSBvbmVzLiAqLw0KICAgICAgICAgICAgLnN0YWNrLWNvbHVtbi1jZW50ZXIgew0KICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICAvKiBXaGF0IGl0IGRvZXM6IEdlbmVyaWMgdXRpbGl0eSBjbGFzcyBmb3IgY2VudGVyaW5nLiBVc2VmdWwgZm9yIGltYWdlcywgYnV0dG9ucywgYW5kIG5lc3RlZCB0YWJsZXMuICovDQogICAgICAgICAgICAuY2VudGVyLW9uLW5hcnJvdyB7DQogICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7DQogICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsNCiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7DQogICAgICAgICAgICB9DQoNCiAgICAgICAgICAgIHRhYmxlLmNlbnRlci1vbi1uYXJyb3cgew0KICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICB0YWJsZS5sZWZ0LWFsaWduIHsNCiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50Ow0KICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICAuaGVhZGVyLWJnIHsNCiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7DQogICAgICAgICAgICB9DQoNCiAgICAgICAgICAgIHRhYmxlLmhpZGVtb2JpbGUgew0KICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsNCiAgICAgICAgICAgIH0NCg0KICAgICAgICAgICAgLmFkZC1wYi1tb2JpbGUgew0KICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7DQogICAgICAgICAgICB9DQogICAgICAgIH0NCgk8L3N0eWxlPg0KCTwhLS0gUHJvZ3Jlc3NpdmUgRW5oYW5jZW1lbnRzIDogRU5EIC0tPjwhLS0gV2hhdCBpdCBkb2VzOiBNYWtlcyBiYWNrZ3JvdW5kIGltYWdlcyBpbiA3MnBwaSBPdXRsb29rIHJlbmRlciBhdCBjb3JyZWN0IHNpemUuIC0tPjwhLS1baWYgZ3RlIG1zbyA5XT4NCiAgICA8eG1sPg0KICAgICAgICA8bzpPZmZpY2VEb2N1bWVudFNldHRpbmdzPg0KICAgICAgICAgICAgPG86QWxsb3dQTkcvPg0KICAgICAgICAgICAgPG86UGl4ZWxzUGVySW5jaD45NjwvbzpQaXhlbHNQZXJJbmNoPg0KICAgICAgICA8L286T2ZmaWNlRG9jdW1lbnRTZXR0aW5ncz4NCiAgICA8L3htbD4NCjwhW2VuZGlmXS0tPg0KPC9oZWFkPg0KPGJvZHkgYmdjb2xvcj0iI2Y0ZjZmOCIgZGF0YS1nci1jLXMtbG9hZGVkPSJ0cnVlIiBkYXRhLWdyLWV4dC1pbnN0YWxsZWQ9IiIgZGF0YS1uZXctZ3ItYy1zLWNoZWNrLWxvYWRlZD0iMTQuMTExMC4wIiBzdHlsZT0ibWFyZ2luOiAwOyBtc28tbGluZS1oZWlnaHQtcnVsZTogZXhhY3RseTsiIHdpZHRoPSIxMDAlIj4NCjxjZW50ZXIgc3R5bGU9ImJhY2tncm91bmQ6ICNmNGY2Zjg7IHRleHQtYWxpZ246IGxlZnQ7IHdpZHRoOiAxMDAlOyI-DQo8dGFibGUgYWxpZ249ImNlbnRlciIgYm9yZGVyPSIwIiBjZWxscGFkZGluZz0iMCIgY2VsbHNwYWNpbmc9IjAiIGNsYXNzPSJlbWFpbC1jb250YWluZXIgaGlkZW1vYmlsZSIgcm9sZT0icHJlc2VudGF0aW9uIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyIgd2lkdGg9IjYwMCI-DQoJPHRib2R5Pg0KCQk8dHI-DQoJCQk8dGQgaGVpZ2h0PSI0MCIgc3R5bGU9ImZvbnQtc2l6ZTogMXB4OyBsaW5lLWhlaWdodDogNDBweDsiPiZuYnNwOzwvdGQ-DQoJCTwvdHI-DQoJPC90Ym9keT4NCjwvdGFibGU-DQoNCjx0YWJsZSBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9ImVtYWlsLWNvbnRhaW5lciIgcm9sZT0icHJlc2VudGF0aW9uIiB3aWR0aD0iMTAwJTsiPg0KPC90YWJsZT4NCg0KPHRhYmxlIGFsaWduPSJjZW50ZXIiIGJnY29sb3I9IiNmZmZmZmYiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBjbGFzcz0iZW1haWwtY29udGFpbmVyIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJtYXJnaW46IGF1dG87IiB3aWR0aD0iNjAwIj4NCgk8dGJvZHk-DQoJCTx0cj4NCgkJCTx0ZCBoZWlnaHQ9IjI0IiBzdHlsZT0iZm9udC1zaXplOiAxcHg7IGxpbmUtaGVpZ2h0OiAyNHB4OyI-Jm5ic3A7PC90ZD4NCgkJPC90cj4NCgk8L3Rib2R5Pg0KPC90YWJsZT4NCg0KPHRhYmxlIGFsaWduPSJjZW50ZXIiIGJnY29sb3I9IiNmZmZmZmYiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBjbGFzcz0iZW1haWwtY29udGFpbmVyIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJtYXJnaW46IGF1dG87IiB3aWR0aD0iNjAwIj4NCgk8dGJvZHk-DQoJCTx0cj4NCgkJCTx0ZCBhbGlnbj0iY2VudGVyIiBjbGFzcz0ic3RhY2stY29sdW1uLWNlbnRlciBhZGQtcGItbW9iaWxlIiBzdHlsZT0icGFkZGluZzogMCA0MHB4OyIgdmFsaWduPSJtaWRkbGUiPjxhIGhyZWY9Imh0dHBzOi8vc2VjdXJseS5jb20vIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyIgdGFyZ2V0PSJfYmxhbmsiPjxpbWcgYWx0PSJTZWN1cmx5IiBjbGFzcz0idG9wLWxvZ28iIHNyYz0iaHR0cHM6Ly9zZW5keS5zZWN1cmx5LmNvbS91cGxvYWRzLzE1OTYwMjA4ODgucG5nIiAvPjwvYT48L3RkPg0KCQkJPCEtLSA8dGQgY2xhc3M9InN0YWNrLWNvbHVtbi1jZW50ZXIiIHZhbGlnbj0ibWlkZGxlIiBzdHlsZT0icGFkZGluZzogMCA0MHB4OyBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlIExUIFBybycsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiA0MDA7IGZvbnQtc2l6ZTogMTJweDsgbGluZS1oZWlnaHQ6IDE4cHg7IGNvbG9yOiAjMTcxYjFmOyB0ZXh0LWFsaWduOiByaWdodDsiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT0ibWFyZ2luOiAwOyI-TG9yZW0gaXBzdW08YnI-IERvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyPGJyPiBBZGlwaXNjaW5nIGVsaXQ8L3A-DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD4gLS0-DQoJCTwvdHI-DQoJPC90Ym9keT4NCjwvdGFibGU-DQoNCjx0YWJsZSBhbGlnbj0iY2VudGVyIiBiZ2NvbG9yPSIjZmZmZmZmIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9ImVtYWlsLWNvbnRhaW5lciBoaWRlbW9iaWxlIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJtYXJnaW46IGF1dG87IiB3aWR0aD0iNjAwIj4NCgk8dGJvZHk-DQoJCTx0cj4NCgkJCTx0ZCBoZWlnaHQ9IjI0IiBzdHlsZT0iZm9udC1zaXplOiAxcHg7IGxpbmUtaGVpZ2h0OiAyNHB4OyI-Jm5ic3A7PC90ZD4NCgkJPC90cj4NCgk8L3Rib2R5Pg0KPC90YWJsZT4NCg0KPHRhYmxlIGFsaWduPSJjZW50ZXIiIGJnY29sb3I9IiNmZmZmZmYiIGJvcmRlcj0iMCIgY2VsbHBhZGRpbmc9IjAiIGNlbGxzcGFjaW5nPSIwIiBjbGFzcz0iZW1haWwtY29udGFpbmVyIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJtYXJnaW46IGF1dG87IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRmM2ZhOyIgd2lkdGg9IjYwMCI-DQoJPHRib2R5Pg0KCQk8dHI-DQoJCQk8dGQgaGVpZ2h0PSI0MCIgc3R5bGU9ImZvbnQtc2l6ZTogMXB4OyBsaW5lLWhlaWdodDogNDBweDsiPiZuYnNwOzwvdGQ-DQoJCTwvdHI-DQoJCTx0cj4NCgkJCTx0ZCBhbGlnbj0iY2VudGVyIiBjbGFzcz0ic3RhY2stY29sdW1uLWNlbnRlciBhZGQtbWItbW9iaWxlIiBzdHlsZT0icGFkZGluZzogMCAyNHB4OyIgdmFsaWduPSJtaWRkbGUiPjxpbWcgYWx0PSJXZWxjb21lIiBjbGFzcz0idG9wLWxvZ28iIHNyYz0iaHR0cHM6Ly9zZW5keS5zZWN1cmx5LmNvbS91cGxvYWRzLzE1ODI1NDY2OTUucG5nIiBzdHlsZT0ibWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IiAvPjwvdGQ-DQoJCTwvdHI-DQoJPC90Ym9keT4NCjwvdGFibGU-DQoNCjx0YWJsZSBhbGlnbj0iY2VudGVyIiBiZ2NvbG9yPSIjZmZmZmZmIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9ImVtYWlsLWNvbnRhaW5lciIgcm9sZT0icHJlc2VudGF0aW9uIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyIgd2lkdGg9IjYwMCI-DQoJPHRib2R5Pg0KCQk8dHI-DQoJCQk8dGQgaGVpZ2h0PSI0MCIgc3R5bGU9ImZvbnQtc2l6ZTogMXB4OyBsaW5lLWhlaWdodDogNDBweDsiPiZuYnNwOzwvdGQ-DQoJCTwvdHI-DQoJCTx0cj4NCgkJCTx0ZCBhbGlnbj0iY2VudGVyIj48aW1nIGFsdD0iV2VsY29tZSIgY2xhc3M9InRvcC1sb2dvIiBzcmM9Imh0dHBzOi8vc2VuZHkuc2VjdXJseS5jb20vdXBsb2Fkcy8xNjg0ODM0NTEyLnBuZyIgc3R5bGU9IndpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDsiIC8-PC90ZD4NCgkJPC90cj4NCgkJPHRyPg0KCQkJPHRkIGhlaWdodD0iMTAiIHN0eWxlPSJmb250LXNpemU6IDFweDsgbGluZS1oZWlnaHQ6IDEwcHg7Ij4mbmJzcDs8L3RkPg0KCQk8L3RyPg0KCQk8dHI-DQoJCQk8dGQgYWxpZ249ImNlbnRlciIgc3R5bGU9ImZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUgQm9sZCcsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDMycHg7IGNvbG9yOiAjMTcxYjFmOyBwYWRkaW5nOiAwIDIwcHg7Ij4NCgkJCTxwIHN0eWxlPSJtYXJnaW46IDA7Ij5OaWxlc2ggUGF0aWw8L3A-DQoJCQk8L3RkPg0KCQk8L3RyPg0KCQk8dHI-DQoJCQk8dGQgaGVpZ2h0PSI2IiBzdHlsZT0iZm9udC1zaXplOiAxcHg7IGxpbmUtaGVpZ2h0OiA2cHg7Ij4mbmJzcDs8L3RkPg0KCQk8L3RyPg0KCQk8dHI-DQoJCQk8dGQgYWxpZ249ImNlbnRlciIgc3R5bGU9ImZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUgTFQgUHJvJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IDQwMDsgZm9udC1zaXplOiAxNnB4OyBsaW5lLWhlaWdodDogMjRweDsgY29sb3I6ICMxNzFiMWY7IHBhZGRpbmc6IDAgMjBweDsiPg0KCQkJPHA-U29mdHdhcmUgRW5naW5lZXI8L3A-DQoJCQk8L3RkPg0KCQk8L3RyPg0KCQk8dHI-DQoJCQk8dGQgc3R5bGU9ImZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUgTFQgUHJvJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IDQwMDsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMjJweDsgY29sb3I6ICMxNzFiMWY7IHBhZGRpbmc6IDAgNDBweDsiPg0KCQkJPHA-SGksIEkgYW0gTmlsZXNoIGFuZCBJIGpvaW5lZCB0aGUgUHVuZSBvZmZpY2UgYXMgYSBTb2Z0d2FyZSBFbmdpbmVlciB0b2RheS4gSSBoYXZlIGJlZW4gd29ya2luZyBpbiB3ZWIgYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQgZm9yIHRoZSBwYXN0IDYuNSB5ZWFycy4gSSBsb3ZlIGNoYWxsZW5nZXMgYW5kIGVuam95IHNvbHZpbmcgcHJvYmxlbXMuIFdoZW4gbm90IHdvcmtpbmcsIEkgbG92ZSBwbGF5aW5nIGNyaWNrZXQgYW5kIHRhYmxlIHRlbm5pcy4gSSByZWNlbnRseSBnb3QgbWFycmllZCBhbmQgYW0gZW5qb3lpbmcgdGhpcyBuZXcgcGhhc2Ugb2YgbGlmZS4gTG9vayBmb3J3YXJkIHRvIG1lZXRpbmcgYW5kIHdvcmtpbmcgd2l0aCBldmVyeW9uZS4gJm5ic3A7PC9wPg0KCQkJPC90ZD4NCgkJPC90cj4NCgkJPHRyPg0KCQkJPHRkIGhlaWdodD0iNDAiIHN0eWxlPSJmb250LXNpemU6IDFweDsgbGluZS1oZWlnaHQ6IDQwcHg7Ij4mbmJzcDs8L3RkPg0KCQk8L3RyPg0KCQk8dHI-DQoJCQk8dGQgYWxpZ249ImNlbnRlciIgc3R5bGU9ImZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUgQm9sZCcsIHNhbnMtc2VyaWY7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMThweDsgbGluZS1oZWlnaHQ6IDI4cHg7IGNvbG9yOiAjMTcxYjFmOyBwYWRkaW5nOiAwIDIwcHg7Ij4NCgkJCTxwIHN0eWxlPSJtYXJnaW46IDA7Ij5HZXQgaW4gdG91Y2ggd2l0aCBOaWxlc2g8L3A-DQoJCQk8L3RkPg0KCQk8L3RyPg0KCQk8dHI-DQoJCQk8dGQgaGVpZ2h0PSIxOCIgc3R5bGU9ImZvbnQtc2l6ZTogMXB4OyBsaW5lLWhlaWdodDogMThweDsiPiZuYnNwOzwvdGQ-DQoJCTwvdHI-DQoJCTx0cj4NCgkJCTx0ZCBhbGlnbj0iY2VudGVyIj4NCgkJCTx0YWJsZSBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgd2lkdGg9IjMyIj4NCgkJCQk8dGJvZHk-DQoJCQkJCTx0cj4NCgkJCQkJCTx0ZCBhbGlnbj0iY2VudGVyIj48YSBocmVmPSJtYWlsdG86bmlsZXNoLnBhdGlsQHNlY3VybHkuY29tIiB0aXRsZT0iRW1haWwiPjxpbWcgYWx0PSIiIGNsYXNzPSJmbHVpZCIgc3JjPSJodHRwczovL3NlbmR5LnNlY3VybHkuY29tL3VwbG9hZHMvMTUyNDE4OTI3My5wbmciIHN0eWxlPSJtYXgtd2lkdGg6IDMycHggIWltcG9ydGFudDsgaGVpZ2h0OiAzMnB4OyB3aWR0aDogMzJweDsiIC8-PC9hPjwvdGQ-DQoJCQkJCTwvdHI-DQoJCQkJPC90Ym9keT4NCgkJCTwvdGFibGU-DQoJCQk8L3RkPg0KCQk8L3RyPg0KCQk8dHI-DQoJCQk8dGQgaGVpZ2h0PSI0MCIgc3R5bGU9ImZvbnQtc2l6ZTogMXB4OyBsaW5lLWhlaWdodDogNDBweDsiPiZuYnNwOzwvdGQ-DQoJCTwvdHI-DQoJPC90Ym9keT4NCjwvdGFibGU-DQoNCjx0YWJsZSBhbGlnbj0iY2VudGVyIiBib3JkZXI9IjAiIGNlbGxwYWRkaW5nPSIwIiBjZWxsc3BhY2luZz0iMCIgY2xhc3M9ImVtYWlsLWNvbnRhaW5lciBoaWRlbW9iaWxlIiByb2xlPSJwcmVzZW50YXRpb24iIHN0eWxlPSJtYXJnaW46IGF1dG87IiB3aWR0aD0iNjAwIj4NCgk8dGJvZHk-DQoJCTx0cj4NCgkJCTx0ZCBoZWlnaHQ9IjQwIiBzdHlsZT0iZm9udC1zaXplOiAxcHg7IGxpbmUtaGVpZ2h0OiA0MHB4OyI-Jm5ic3A7PC90ZD4NCgkJPC90cj4NCgk8L3Rib2R5Pg0KPC90YWJsZT4NCjwvY2VudGVyPg0KPC9ib2R5Pg0KPC9odG1sPg0K"
        }
      },
      "sizeEstimate": 25841,
      "historyId": "60721",
      "internalDate": "1684834694000"
    },
    {
      "id": "18847caf3bff48b5",
      "threadId": "18847c666225f53e",
      "labelIds": [
        "UNREAD",
        "IMPORTANT",
        "CATEGORY_PERSONAL",
        "INBOX"
      ],
      "snippet": "@ashish commented on this pull request. In app/js/utils.js: &gt; @@ -764,7 +771,7 @@ function isSeachRequest(lHostName, info_url) { } function sendSHDataToServer(searchTerm, url, matchTerm, domain) { -",
      "payload": {
        "partId": "",
        "mimeType": "multipart/alternative",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:5dca:0:0:0:0:0 with SMTP id u10csp124564ocp;        Tue, 23 May 2023 01:47:43 -0700 (PDT)"
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ6MdSF2VY/s3uxOxfLbfWwIhxb+1c9l5ftjg1Q91Y0bFy7ubdfo9QyF0VkylR4ehkp1Jmcl"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:620a:22e1:b0:75b:23a1:363c with SMTP id p1-20020a05620a22e100b0075b23a1363cmr3208025qki.77.1684831663021;        Tue, 23 May 2023 01:47:43 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684831663; cv=none;        d=google.com; s=arc-20160816;        b=ROms5k2fgApzRPK+3oRzqMcL86pI7mx2Q/Fouhr/HtLST8m2eVHOlf/7jsk+pGnjq0         VLxhpExV69GczxvK84ZQF2PHEcjjJAA7gvI0XnSz9IKPjN09H6y6Dw3D6yCP4AoIbZMO         B8Y06F7SuOBurlBm6HDjmnc41k8RpzK2OF1rnh/TyJn7xyxdxNe9ahHQHTmclp3DRlON         Yq8YyCwX1fk/Rz+oZuEpiHkM6FVDhC9ffpWG5FtnhBRd5BzQqReGiEqeE3QYleGeyVOn         leNANNmee4VR2g0LOUbUL/9yRWrXhAOOUIaPEKCuHDDrzhS1KB4umBip7s3gEShIkXUr         BZEQ=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=feedback-id:list-unsubscribe:list-post:list-archive:list-id         :precedence:content-transfer-encoding:mime-version:subject         :references:in-reply-to:message-id:cc:to:reply-to:from:date         :dkim-signature:dkim-signature;        bh=U9/2tcdYD4OEF7UOp+5DwKsqaqKVECpTTElz5qbxKww=;        b=gP9yPGjLmaPuu+GtvgE1ElDPL5p8hmbfaJVJe24oUmaB0fz5jkmsWMycSUF8NEAMWn         wVamAkeBRIy2c4xVZfJ4RYfPg6uGWk0/4uUwdVeOnTjTffS8HV1eeq/SJ/Q4pqwMVLgO         4G41Tmu4yUbv1SQeRlOaoMtH3ERHi7g8dFLsstxupJc+nm9xLzvQfSe+gSAUkYz5VjtK         bdPaztdH9yBrVrR2PyAaEPrtnL4leUhPpOGr4hdfxhmkrluM8v/JO1rSqGZ8PZaYwsq9         ZRLzu8uuLx9+46gR8QsiD650T8Prd0tukuhSAFBxZtCLSz+GMEj+ChcKyKoREzoqc41A         Ul+Q=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@securly.com header.s=kgiaa32e2nydr4uycqbiokaxmvfucv4q header.b=M0U55tCK;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=LnLFOOoF;       spf=pass (google.com: domain of 0100018847caf013-75f2e413-e40c-4724-8c96-5df7c8669e4f-000000@amazonses.com designates 54.240.48.66 as permitted sender) smtp.mailfrom=0100018847caf013-75f2e413-e40c-4724-8c96-5df7c8669e4f-000000@amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Return-Path",
            "value": "<0100018847caf013-75f2e413-e40c-4724-8c96-5df7c8669e4f-000000@amazonses.com>"
          },
          {
            "name": "Received",
            "value": "from a48-66.smtp-out.amazonses.com (a48-66.smtp-out.amazonses.com. [54.240.48.66])        by mx.google.com with ESMTPS id s7-20020a05620a030700b0075b13a89c28si2626572qkm.664.2023.05.23.01.47.42        for <pratik.tiwari@securly.com>        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Tue, 23 May 2023 01:47:42 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of 0100018847caf013-75f2e413-e40c-4724-8c96-5df7c8669e4f-000000@amazonses.com designates 54.240.48.66 as permitted sender) client-ip=54.240.48.66;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=kgiaa32e2nydr4uycqbiokaxmvfucv4q header.b=M0U55tCK;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=LnLFOOoF;       spf=pass (google.com: domain of 0100018847caf013-75f2e413-e40c-4724-8c96-5df7c8669e4f-000000@amazonses.com designates 54.240.48.66 as permitted sender) smtp.mailfrom=0100018847caf013-75f2e413-e40c-4724-8c96-5df7c8669e4f-000000@amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=kgiaa32e2nydr4uycqbiokaxmvfucv4q; d=securly.com; t=1684831662; h=Date:From:Reply-To:To:Cc:Message-ID:In-Reply-To:References:Subject:Mime-Version:Content-Type:Content-Transfer-Encoding:List-ID:List-Archive:List-Post:List-Unsubscribe; bh=3uacL3KFlgLKHMqLDge8Y+odlhqrm3WIdYvSxkkLCQk=; b=M0U55tCKhhW/1f6wz5rL6tYlb3T/MJKJ2lb2Lx7TpmlKbueeGnauBhQg8u1dkXup ZS/ieFvIsos5zkXoXh0Rs59M7SHXrkOoyD0hd4sGdwYHY07rmc/Llfd/RctQrwO9p6+ KM31Tj9nc3OO5Lhrfd4auOepYqJHCeY+qjU1j5lw="
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1684831662; h=Date:From:Reply-To:To:Cc:Message-ID:In-Reply-To:References:Subject:Mime-Version:Content-Type:Content-Transfer-Encoding:List-ID:List-Archive:List-Post:List-Unsubscribe:Feedback-ID; bh=3uacL3KFlgLKHMqLDge8Y+odlhqrm3WIdYvSxkkLCQk=; b=LnLFOOoFuQnTeLyvWrdgu7Y8ylJ8jLlC2XtSzQLlyjc3njn00L66Ic+rLcGfG4FC 0ZO6Y19sy9eesKvmPCc7zttFu5cS3RY5i/qPYI65EzYcYnJOHKY7L+6qe4FxG2b/g+A k0plSnSBgPw+X08F3HTlIwj12Mc9hlYVHMgDWpA4="
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 08:47:42 +0000"
          },
          {
            "name": "From",
            "value": "ashish <git@securly.com>"
          },
          {
            "name": "Reply-To",
            "value": "\"engineering/crextn_client\" <reply+AAAABPJ26BQE5WNS7JMTZXOCPGYCZEVBNHGUB4I@reply.g.securly.com>"
          },
          {
            "name": "To",
            "value": "\"engineering/crextn_client\" <git@securly.com>"
          },
          {
            "name": "Cc",
            "value": "pratikt <pratik.tiwari@securly.com>, Author <author@noreply.g.securly.com>"
          },
          {
            "name": "Message-ID",
            "value": "<0100018847caf013-75f2e413-e40c-4724-8c96-5df7c8669e4f-000000@email.amazonses.com>"
          },
          {
            "name": "In-Reply-To",
            "value": "<engineering/crextn_client/pull/306@g.securly.com>"
          },
          {
            "name": "References",
            "value": "<engineering/crextn_client/pull/306@g.securly.com>"
          },
          {
            "name": "Subject",
            "value": "Re: [engineering/crextn_client] feat: REL 5924 proxy identification (#306)"
          },
          {
            "name": "Mime-Version",
            "value": "1.0"
          },
          {
            "name": "Content-Type",
            "value": "multipart/alternative; boundary=\"--==_mimepart_646c7dacd73e6_8519b42695e\"; charset=UTF-8"
          },
          {
            "name": "Content-Transfer-Encoding",
            "value": "7bit"
          },
          {
            "name": "Precedence",
            "value": "list"
          },
          {
            "name": "X-GitHub-Sender",
            "value": "ashish"
          },
          {
            "name": "X-GitHub-Recipient",
            "value": "pratikt"
          },
          {
            "name": "X-GitHub-Reason",
            "value": "author"
          },
          {
            "name": "List-ID",
            "value": "engineering/crextn_client <crextn_client.engineering.g.securly.com>"
          },
          {
            "name": "List-Archive",
            "value": "https://g.securly.com/engineering/crextn_client"
          },
          {
            "name": "List-Post",
            "value": "<mailto:reply+AAAABPJ26BQE5WNS7JMTZXOCPGYCZEVBNHGUB4I@reply.g.securly.com>"
          },
          {
            "name": "List-Unsubscribe",
            "value": "<mailto:unsub+AAAABPJ26BQE5WNS7JMTZXOCPGYCZEVBNHGUB4I@reply.g.securly.com>, <https://g.securly.com/notifications/unsubscribe/AAAABPID3UBTGPJOZSW46WLXHR2SZANCNFSM2ZIG>"
          },
          {
            "name": "X-Auto-Response-Suppress",
            "value": "All"
          },
          {
            "name": "X-GitHub-Recipient-Address",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Feedback-ID",
            "value": "1.us-east-1.fifWeqhjf1+zK4CVuk2rZeClN3yfC4POaeFEHG1K+Pc=:AmazonSES"
          },
          {
            "name": "X-SES-Outgoing",
            "value": "2023.05.23-54.240.48.66"
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "text/plain",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/plain; charset=UTF-8"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "7bit"
              }
            ],
            "body": {
              "size": 628,
              "data": "QGFzaGlzaCBjb21tZW50ZWQgb24gdGhpcyBwdWxsIHJlcXVlc3QuDQoNCg0KDQo-IEBAIC03NjQsNyArNzcxLDcgQEAgZnVuY3Rpb24gaXNTZWFjaFJlcXVlc3QobEhvc3ROYW1lLCBpbmZvX3VybCkgew0KIH0NCiANCiBmdW5jdGlvbiBzZW5kU0hEYXRhVG9TZXJ2ZXIoc2VhcmNoVGVybSwgdXJsLCBtYXRjaFRlcm0sIGRvbWFpbikgew0KLQlpZih3aW5kb3cudXNlckVtYWlsICYmIHdpbmRvdy5jbHVzdGVyVXJsICE9PSAnVU5LTk9XTl9TQ0hPT0wnICYmIHdpbmRvdy5jbHVzdGVyVXJsICE9PSAnQVZPSURfT1MnICYmIHdpbmRvdy5jbHVzdGVyVXJsICE9PSAndW5rbm93bicpIHsNCisJaWYoU0hPVUxEX0NBTExfQkFDS0VORCkgew0KDQpJbnN0ZWFkIG9mIHN0b3JpbmcgaXQgaW4gY29uc3RhbnQsIG1vdmUgdGhpcyB0byBmdW5jdGlvbi4NCg0KLS0gDQpZb3UgYXJlIHJlY2VpdmluZyB0aGlzIGJlY2F1c2UgeW91IGF1dGhvcmVkIHRoZSB0aHJlYWQuDQpSZXBseSB0byB0aGlzIGVtYWlsIGRpcmVjdGx5IG9yIHZpZXcgaXQgb24gR2l0SHViIEVudGVycHJpc2U6DQpodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNwdWxscmVxdWVzdHJldmlldy0yMTEyMw=="
            }
          },
          {
            "partId": "1",
            "mimeType": "text/html",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/html; charset=UTF-8"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "7bit"
              }
            ],
            "body": {
              "size": 1818,
              "data": "PHA-PC9wPg0KPHA-PGI-QGFzaGlzaDwvYj4gY29tbWVudGVkIG9uIHRoaXMgcHVsbCByZXF1ZXN0LjwvcD4NCg0KPGhyPg0KDQo8cD5JbiA8YSBocmVmPSJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNkaXNjdXNzaW9uX3I2MTQxIj5hcHAvanMvdXRpbHMuanM8L2E-OjwvcD4NCjxwcmUgc3R5bGU9J2NvbG9yOiM1NTUnPiZndDsgQEAgLTc2NCw3ICs3NzEsNyBAQCBmdW5jdGlvbiBpc1NlYWNoUmVxdWVzdChsSG9zdE5hbWUsIGluZm9fdXJsKSB7DQogfQ0KIA0KIGZ1bmN0aW9uIHNlbmRTSERhdGFUb1NlcnZlcihzZWFyY2hUZXJtLCB1cmwsIG1hdGNoVGVybSwgZG9tYWluKSB7DQotCWlmKHdpbmRvdy51c2VyRW1haWwgJmFtcDsmYW1wOyB3aW5kb3cuY2x1c3RlclVybCAhPT0gJiMzOTtVTktOT1dOX1NDSE9PTCYjMzk7ICZhbXA7JmFtcDsgd2luZG93LmNsdXN0ZXJVcmwgIT09ICYjMzk7QVZPSURfT1MmIzM5OyAmYW1wOyZhbXA7IHdpbmRvdy5jbHVzdGVyVXJsICE9PSAmIzM5O3Vua25vd24mIzM5Oykgew0KKwlpZihTSE9VTERfQ0FMTF9CQUNLRU5EKSB7DQo8L3ByZT4NCjxwPkluc3RlYWQgb2Ygc3RvcmluZyBpdCBpbiBjb25zdGFudCwgbW92ZSB0aGlzIHRvIGZ1bmN0aW9uLjwvcD4NCg0KPHAgc3R5bGU9ImZvbnQtc2l6ZTpzbWFsbDstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZTtjb2xvcjojNjY2OyI-Jm1kYXNoOzxiciAvPllvdSBhcmUgcmVjZWl2aW5nIHRoaXMgYmVjYXVzZSB5b3UgYXV0aG9yZWQgdGhlIHRocmVhZC48YnIgLz5SZXBseSB0byB0aGlzIGVtYWlsIGRpcmVjdGx5LCA8YSBocmVmPSJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNwdWxscmVxdWVzdHJldmlldy0yMTEyMyI-dmlldyBpdCBvbiBHaXRIdWIgRW50ZXJwcmlzZTwvYT4sIG9yIDxhIGhyZWY9Imh0dHBzOi8vZy5zZWN1cmx5LmNvbS9ub3RpZmljYXRpb25zL3Vuc3Vic2NyaWJlLWF1dGgvQUFBQUJQTlBOUU5ZNEhQUUlBM0dZNERYSFIyU1pBTkNORlNNMlpJRyI-dW5zdWJzY3JpYmU8L2E-LjxpbWcgc3JjPSJodHRwczovL2cuc2VjdXJseS5jb20vbm90aWZpY2F0aW9ucy9iZWFjb24vQUFBQUJQTUc2TU9HQ1NKSkpJRlJCSkRYSFIyU1pBNUNORlNNMlpJR1ZSUlc2M0xOTVZYSElYM1VQRllHTE1LUU9WV0dZVVRGT0YyV0s0M1VLSlNYTTJMRk82VkdHMzNOTlZTVzQ1QzdORlNNMlVVRC5naWYiIGhlaWdodD0iMSIgd2lkdGg9IjEiIGFsdD0iIiAvPjwvcD4NCjxzY3JpcHQgdHlwZT0iYXBwbGljYXRpb24vbGQranNvbiI-Ww0Kew0KIkBjb250ZXh0IjogImh0dHA6Ly9zY2hlbWEub3JnIiwNCiJAdHlwZSI6ICJFbWFpbE1lc3NhZ2UiLA0KInBvdGVudGlhbEFjdGlvbiI6IHsNCiJAdHlwZSI6ICJWaWV3QWN0aW9uIiwNCiJ0YXJnZXQiOiAiaHR0cHM6Ly9nLnNlY3VybHkuY29tL2VuZ2luZWVyaW5nL2NyZXh0bl9jbGllbnQvcHVsbC8zMDYjcHVsbHJlcXVlc3RyZXZpZXctMjExMjMiLA0KInVybCI6ICJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNwdWxscmVxdWVzdHJldmlldy0yMTEyMyIsDQoibmFtZSI6ICJWaWV3IFB1bGwgUmVxdWVzdCINCn0sDQoiZGVzY3JpcHRpb24iOiAiVmlldyB0aGlzIFB1bGwgUmVxdWVzdCBvbiBHaXRIdWIgRW50ZXJwcmlzZSIsDQoicHVibGlzaGVyIjogew0KIkB0eXBlIjogIk9yZ2FuaXphdGlvbiIsDQoibmFtZSI6ICJHaXRIdWIiLA0KInVybCI6ICJodHRwczovL2dpdGh1Yi5jb20iDQp9DQp9DQpdPC9zY3JpcHQ-"
            }
          }
        ]
      },
      "sizeEstimate": 8866,
      "historyId": "60720",
      "internalDate": "1684831662000"
    },
    {
      "id": "18847c80535a16a2",
      "threadId": "18847c666225f53e",
      "labelIds": [
        "UNREAD",
        "IMPORTANT",
        "CATEGORY_PERSONAL",
        "INBOX"
      ],
      "snippet": "@ashish commented on this pull request. In app/js/config.json: &gt; @@ -0,0 +1415 @@ +{ Remove this config.json from here. Its stored in https://g.securly.com/engineering/misc/blob/sprint-master/",
      "payload": {
        "partId": "",
        "mimeType": "multipart/alternative",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:5dca:0:0:0:0:0 with SMTP id u10csp123289ocp;        Tue, 23 May 2023 01:44:31 -0700 (PDT)"
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ4K6y3oAXP3QU0n2gYhrJ6L5jDpMgIFCnKboShNFOtFcWNbz+2i7IppzyJkhJhKbyQ9YJZT"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6214:29e4:b0:61b:7884:4351 with SMTP id jv4-20020a05621429e400b0061b78844351mr20687181qvb.32.1684831470946;        Tue, 23 May 2023 01:44:30 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684831470; cv=none;        d=google.com; s=arc-20160816;        b=nVmqpPH4jrvPUHdVwHmzLX1QqZ/JKhQHoSiz0IIzKLooAcJNbGc22kCPQY8Kf2yl7K         j0EdvCmp36HfUchBH9JDTjs9jGXbqIk1qjNn2siLuwoP1cngdKwtXMexHNHvFpvbM7xy         JA86sYQ7UDG03I7w/F68GszO6jtDLibBukN9xTMr296DjcB1KlpeSd01iXkNoX+fkWuO         CeQS/pEwqYgVyidk6a36okMsB5KFClU6UI6iXFxZyYZ6yf4xxJrb2l8+ki5L8nXxwViF         +qTWA8guGFqrbseS15jFiTeymYCudyeVM92Y9of0tfDfisS4MXeUKIbxykrvDGHugVOO         aUvA=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=feedback-id:list-unsubscribe:list-post:list-archive:list-id         :precedence:content-transfer-encoding:mime-version:subject         :references:in-reply-to:message-id:cc:to:reply-to:from:date         :dkim-signature:dkim-signature;        bh=BIAXd+ner7jDVg0njsjZPuPL37eDZzVQ/kFD/sHfVk4=;        b=xFdZy4q5UDeWojTxmM7uEIGrvS0iVGmnrwrjRBwndJOE0sAqKfQGTX4PAHGOiAEuKN         P3XTWYw49YOzfGDWcsIUhKY3iOcSSTJXS0klhkNHVeqcurSKYfBNvRSS/eRp8YO/5MKH         ipBL043y0HBFgL2+f8FGgL73wTtM6EyrbLBlBsq41zh5UnWyBfTLbwSVvlJoXIGgGQm5         Zu7SdIghQSPQjlYWVI7Mvwo1/FpGd47wATeLM50c9rQTbdLgh3zccr0PR/ZpGeIlpA6f         sJ22nira956EQIvA8BeNhRsdFfBNSV3f6ak4PwAJqFyLPLulnnvsE+YlBsE/YBokN5GX         ZHAw=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@securly.com header.s=kgiaa32e2nydr4uycqbiokaxmvfucv4q header.b=QwyZf1V0;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=b7R3oZ3k;       spf=pass (google.com: domain of 0100018847c7ffbf-14bdc1cb-e246-478b-aaf4-c035e0362556-000000@amazonses.com designates 54.240.11.139 as permitted sender) smtp.mailfrom=0100018847c7ffbf-14bdc1cb-e246-478b-aaf4-c035e0362556-000000@amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Return-Path",
            "value": "<0100018847c7ffbf-14bdc1cb-e246-478b-aaf4-c035e0362556-000000@amazonses.com>"
          },
          {
            "name": "Received",
            "value": "from a11-139.smtp-out.amazonses.com (a11-139.smtp-out.amazonses.com. [54.240.11.139])        by mx.google.com with ESMTPS id p15-20020ad45f4f000000b005e98c19d206si1899603qvg.397.2023.05.23.01.44.30        for <pratik.tiwari@securly.com>        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Tue, 23 May 2023 01:44:30 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of 0100018847c7ffbf-14bdc1cb-e246-478b-aaf4-c035e0362556-000000@amazonses.com designates 54.240.11.139 as permitted sender) client-ip=54.240.11.139;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=kgiaa32e2nydr4uycqbiokaxmvfucv4q header.b=QwyZf1V0;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=b7R3oZ3k;       spf=pass (google.com: domain of 0100018847c7ffbf-14bdc1cb-e246-478b-aaf4-c035e0362556-000000@amazonses.com designates 54.240.11.139 as permitted sender) smtp.mailfrom=0100018847c7ffbf-14bdc1cb-e246-478b-aaf4-c035e0362556-000000@amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=kgiaa32e2nydr4uycqbiokaxmvfucv4q; d=securly.com; t=1684831469; h=Date:From:Reply-To:To:Cc:Message-ID:In-Reply-To:References:Subject:Mime-Version:Content-Type:Content-Transfer-Encoding:List-ID:List-Archive:List-Post:List-Unsubscribe; bh=3e5PXOY1Bkc0twq5BJroHwEZJUsp24mgjIbqVvbU0iY=; b=QwyZf1V08STS9NI18f87FSGo1zIBSsI8zU8ngNkvuN/RTou/cPzWCcvnJoxaFLUR EmujxD1HR7UyhpQtBjy6gTWFSyk7OgEFgWz8R1ptL/gHP74dwxDcvNPsB8YQiV09RzH wTxs1a5HDbEOHlLWRzhUyThhfCXDF06BGpNBSlOE="
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1684831469; h=Date:From:Reply-To:To:Cc:Message-ID:In-Reply-To:References:Subject:Mime-Version:Content-Type:Content-Transfer-Encoding:List-ID:List-Archive:List-Post:List-Unsubscribe:Feedback-ID; bh=3e5PXOY1Bkc0twq5BJroHwEZJUsp24mgjIbqVvbU0iY=; b=b7R3oZ3k+WnL2RFRDG2/8Pa03axT+UAaDPSFpNfZ7BpcnOyNjJIjQ+oB7VlXCohl jDaTvkwT6h/B4LhUj7gZFSGgkn6pl+rDnyF11Y6tJ0Z81tC3UWFQwjlw8ke/Yvj3hm0 lykoJ+nMVHnxOjzU0pOOKWsabnYopmNl1Ih5WSRo="
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 08:44:29 +0000"
          },
          {
            "name": "From",
            "value": "ashish <git@securly.com>"
          },
          {
            "name": "Reply-To",
            "value": "\"engineering/crextn_client\" <reply+AAAABPNGT2QOLMA5F7JCA5GCPGXWZEVBNHGUB4I@reply.g.securly.com>"
          },
          {
            "name": "To",
            "value": "\"engineering/crextn_client\" <git@securly.com>"
          },
          {
            "name": "Cc",
            "value": "pratikt <pratik.tiwari@securly.com>, Author <author@noreply.g.securly.com>"
          },
          {
            "name": "Message-ID",
            "value": "<0100018847c7ffbf-14bdc1cb-e246-478b-aaf4-c035e0362556-000000@email.amazonses.com>"
          },
          {
            "name": "In-Reply-To",
            "value": "<engineering/crextn_client/pull/306@g.securly.com>"
          },
          {
            "name": "References",
            "value": "<engineering/crextn_client/pull/306@g.securly.com>"
          },
          {
            "name": "Subject",
            "value": "Re: [engineering/crextn_client] feat: REL 5924 proxy identification (#306)"
          },
          {
            "name": "Mime-Version",
            "value": "1.0"
          },
          {
            "name": "Content-Type",
            "value": "multipart/alternative; boundary=\"--==_mimepart_646c7cec44de2_9d19b42607e\"; charset=UTF-8"
          },
          {
            "name": "Content-Transfer-Encoding",
            "value": "7bit"
          },
          {
            "name": "Precedence",
            "value": "list"
          },
          {
            "name": "X-GitHub-Sender",
            "value": "ashish"
          },
          {
            "name": "X-GitHub-Recipient",
            "value": "pratikt"
          },
          {
            "name": "X-GitHub-Reason",
            "value": "author"
          },
          {
            "name": "List-ID",
            "value": "engineering/crextn_client <crextn_client.engineering.g.securly.com>"
          },
          {
            "name": "List-Archive",
            "value": "https://g.securly.com/engineering/crextn_client"
          },
          {
            "name": "List-Post",
            "value": "<mailto:reply+AAAABPNGT2QOLMA5F7JCA5GCPGXWZEVBNHGUB4I@reply.g.securly.com>"
          },
          {
            "name": "List-Unsubscribe",
            "value": "<mailto:unsub+AAAABPNGT2QOLMA5F7JCA5GCPGXWZEVBNHGUB4I@reply.g.securly.com>, <https://g.securly.com/notifications/unsubscribe/AAAABPNKAWHDSBYW37RTEADXHR2GZANCNFSM2ZIG>"
          },
          {
            "name": "X-Auto-Response-Suppress",
            "value": "All"
          },
          {
            "name": "X-GitHub-Recipient-Address",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Feedback-ID",
            "value": "1.us-east-1.fifWeqhjf1+zK4CVuk2rZeClN3yfC4POaeFEHG1K+Pc=:AmazonSES"
          },
          {
            "name": "X-SES-Outgoing",
            "value": "2023.05.23-54.240.11.139"
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "text/plain",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/plain; charset=UTF-8"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "7bit"
              }
            ],
            "body": {
              "size": 484,
              "data": "QGFzaGlzaCBjb21tZW50ZWQgb24gdGhpcyBwdWxsIHJlcXVlc3QuDQoNCg0KDQo-IEBAIC0wLDAgKzEsNDE1IEBADQorew0KDQpSZW1vdmUgdGhpcyBjb25maWcuanNvbiBmcm9tIGhlcmUuIEl0cyBzdG9yZWQgaW4gaHR0cHM6Ly9nLnNlY3VybHkuY29tL2VuZ2luZWVyaW5nL21pc2MvYmxvYi9zcHJpbnQtbWFzdGVyL2V4dGVuc2lvbl9jb25maWcvY29uZmlnLmpzb24uIEFuZCBhbGwgdGhlIHVwZGF0ZWQgY2hhbmdlcyBzaG91bGQgYmUgcGFydCBvZiBEZXZvcHMgZGVwZW5kZW5jeS4NCg0KLS0gDQpZb3UgYXJlIHJlY2VpdmluZyB0aGlzIGJlY2F1c2UgeW91IGF1dGhvcmVkIHRoZSB0aHJlYWQuDQpSZXBseSB0byB0aGlzIGVtYWlsIGRpcmVjdGx5IG9yIHZpZXcgaXQgb24gR2l0SHViIEVudGVycHJpc2U6DQpodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNwdWxscmVxdWVzdHJldmlldy0yMTEyMg=="
            }
          },
          {
            "partId": "1",
            "mimeType": "text/html",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/html; charset=UTF-8"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "7bit"
              }
            ],
            "body": {
              "size": 1730,
              "data": "PHA-PC9wPg0KPHA-PGI-QGFzaGlzaDwvYj4gY29tbWVudGVkIG9uIHRoaXMgcHVsbCByZXF1ZXN0LjwvcD4NCg0KPGhyPg0KDQo8cD5JbiA8YSBocmVmPSJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNkaXNjdXNzaW9uX3I2MTQwIj5hcHAvanMvY29uZmlnLmpzb248L2E-OjwvcD4NCjxwcmUgc3R5bGU9J2NvbG9yOiM1NTUnPiZndDsgQEAgLTAsMCArMSw0MTUgQEANCit7DQo8L3ByZT4NCjxwPlJlbW92ZSB0aGlzIGNvbmZpZy5qc29uIGZyb20gaGVyZS4gSXRzIHN0b3JlZCBpbiA8YSBocmVmPSJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvbWlzYy9ibG9iL3NwcmludC1tYXN0ZXIvZXh0ZW5zaW9uX2NvbmZpZy9jb25maWcuanNvbiI-aHR0cHM6Ly9nLnNlY3VybHkuY29tL2VuZ2luZWVyaW5nL21pc2MvYmxvYi9zcHJpbnQtbWFzdGVyL2V4dGVuc2lvbl9jb25maWcvY29uZmlnLmpzb248L2E-LiBBbmQgYWxsIHRoZSB1cGRhdGVkIGNoYW5nZXMgc2hvdWxkIGJlIHBhcnQgb2YgRGV2b3BzIGRlcGVuZGVuY3kuPC9wPg0KDQo8cCBzdHlsZT0iZm9udC1zaXplOnNtYWxsOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lO2NvbG9yOiM2NjY7Ij4mbWRhc2g7PGJyIC8-WW91IGFyZSByZWNlaXZpbmcgdGhpcyBiZWNhdXNlIHlvdSBhdXRob3JlZCB0aGUgdGhyZWFkLjxiciAvPlJlcGx5IHRvIHRoaXMgZW1haWwgZGlyZWN0bHksIDxhIGhyZWY9Imh0dHBzOi8vZy5zZWN1cmx5LmNvbS9lbmdpbmVlcmluZy9jcmV4dG5fY2xpZW50L3B1bGwvMzA2I3B1bGxyZXF1ZXN0cmV2aWV3LTIxMTIyIj52aWV3IGl0IG9uIEdpdEh1YiBFbnRlcnByaXNlPC9hPiwgb3IgPGEgaHJlZj0iaHR0cHM6Ly9nLnNlY3VybHkuY29tL25vdGlmaWNhdGlvbnMvdW5zdWJzY3JpYmUtYXV0aC9BQUFBQlBMVTdHMkVaQjRDSlZTUUtVRFhIUjJHWkFOQ05GU00yWklHIj51bnN1YnNjcmliZTwvYT4uPGltZyBzcmM9Imh0dHBzOi8vZy5zZWN1cmx5LmNvbS9ub3RpZmljYXRpb25zL2JlYWNvbi9BQUFBQlBNVFNCSlhKWlJYUkQ2VFk2RFhIUjJHWkE1Q05GU00yWklHVlJSVzYzTE5NVlhISVgzVVBGWUdMTUtRT1ZXR1lVVEZPRjJXSzQzVUtKU1hNMkxGTzZWR0czM05OVlNXNDVDN05GU00yVVVDLmdpZiIgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgYWx0PSIiIC8-PC9wPg0KPHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj5bDQp7DQoiQGNvbnRleHQiOiAiaHR0cDovL3NjaGVtYS5vcmciLA0KIkB0eXBlIjogIkVtYWlsTWVzc2FnZSIsDQoicG90ZW50aWFsQWN0aW9uIjogew0KIkB0eXBlIjogIlZpZXdBY3Rpb24iLA0KInRhcmdldCI6ICJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNwdWxscmVxdWVzdHJldmlldy0yMTEyMiIsDQoidXJsIjogImh0dHBzOi8vZy5zZWN1cmx5LmNvbS9lbmdpbmVlcmluZy9jcmV4dG5fY2xpZW50L3B1bGwvMzA2I3B1bGxyZXF1ZXN0cmV2aWV3LTIxMTIyIiwNCiJuYW1lIjogIlZpZXcgUHVsbCBSZXF1ZXN0Ig0KfSwNCiJkZXNjcmlwdGlvbiI6ICJWaWV3IHRoaXMgUHVsbCBSZXF1ZXN0IG9uIEdpdEh1YiBFbnRlcnByaXNlIiwNCiJwdWJsaXNoZXIiOiB7DQoiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwNCiJuYW1lIjogIkdpdEh1YiIsDQoidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbSINCn0NCn0NCl08L3NjcmlwdD4="
            }
          }
        ]
      },
      "sizeEstimate": 8645,
      "historyId": "60720",
      "internalDate": "1684831469000"
    },
    {
      "id": "18847c666225f53e",
      "threadId": "18847c666225f53e",
      "labelIds": [
        "UNREAD",
        "IMPORTANT",
        "CATEGORY_PERSONAL",
        "INBOX"
      ],
      "snippet": "@ashish commented on this pull request. In app/js/ProxyIdentificationService.js: &gt; + if (window.location.origin.includes(&quot;securly.com&quot;)) { + clearInterval(intervalId); + return; + } + + //",
      "payload": {
        "partId": "",
        "mimeType": "multipart/alternative",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:5dca:0:0:0:0:0 with SMTP id u10csp122647ocp;        Tue, 23 May 2023 01:42:45 -0700 (PDT)"
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ6tHMRSQeS1/EiN7GJFvF698SPX1bX487CV8FWH3EkkC87uNdGICtMn2KH/6vK8FVZfbLfa"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6214:21a7:b0:5cd:1adc:30e2 with SMTP id t7-20020a05621421a700b005cd1adc30e2mr22494446qvc.11.1684831364855;        Tue, 23 May 2023 01:42:44 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684831364; cv=none;        d=google.com; s=arc-20160816;        b=sxGXsSq9hdeULmtfnXks1JQyRD6Lx50vWXSeOs7zqkIMz7r7+rzzaKwN5SappoOmhd         YcTC4Cy98bXZth9gpiUHSzabRdij6OuBezNNakSlHSDFxLg64b96R6/L5WIu3E7kvmy4         Q3crwLk8zW1oIdqfuv9Egin0Vt3sdi5FrRUZwUMHONclTd4879ITbMoO6mbmfrgrethY         O0cM6/O6k20oM78EClT6ySlkmwUJcB/2BAP8VutdHls3oqiVFMkHEi3u3SGlfdgp2yB3         nUN7r/xcmpsQqtCZ7cd4QKSUBebifrT6AeAmhYU64cq/mVzmH2dkXGcd1tFMWdgTYqwn         d/9g=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=feedback-id:list-unsubscribe:list-post:list-archive:list-id         :precedence:content-transfer-encoding:mime-version:subject         :references:in-reply-to:message-id:cc:to:reply-to:from:date         :dkim-signature:dkim-signature;        bh=POPVRuHORI25IQan7d9FN2XIner3ac2zGhBhKuGd/o0=;        b=hmiK74zV6qXNWJYlKV5TIlW73l8mWcWS+rJ3iarrKAgV7Njoa9pU/YqH3JEZL+ys7p         6KrqwF+ulaGzWLbKNQpAXLmGNiy63N+oeViPnBqmLkDMQCyn732XNzw27je8IqLWGM6z         4e0QdvREKTACIJT8dGUNEWEYEpCzR45F1GJFiDpk2gsaVG5RbcMWhTkxGLkKtQDqI3Mg         TLQwgaZHF+5HTRFape0mLZ2Pc7oRDkRtt0bzm+p/Of2ffkpkdip+IEW3qVW8qpl7LtV2         TAuxMq6hLmAHOa5FPnUUXJvtR10GO6nmpOdDZ+Y88aOaABbMHAg+xxqwlZIXmsNd58Lt         yjQg=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@securly.com header.s=kgiaa32e2nydr4uycqbiokaxmvfucv4q header.b=Nz1JH8EK;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=IY5OD7Lx;       spf=pass (google.com: domain of 0100018847c664a0-86ebd6c4-3b87-401e-be80-21759e0211f8-000000@amazonses.com designates 54.240.11.147 as permitted sender) smtp.mailfrom=0100018847c664a0-86ebd6c4-3b87-401e-be80-21759e0211f8-000000@amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Return-Path",
            "value": "<0100018847c664a0-86ebd6c4-3b87-401e-be80-21759e0211f8-000000@amazonses.com>"
          },
          {
            "name": "Received",
            "value": "from a11-147.smtp-out.amazonses.com (a11-147.smtp-out.amazonses.com. [54.240.11.147])        by mx.google.com with ESMTPS id if13-20020a0562141c4d00b006238b0d1487si1042014qvb.541.2023.05.23.01.42.44        for <pratik.tiwari@securly.com>        (version=TLS1_2 cipher=ECDHE-ECDSA-AES128-GCM-SHA256 bits=128/128);        Tue, 23 May 2023 01:42:44 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of 0100018847c664a0-86ebd6c4-3b87-401e-be80-21759e0211f8-000000@amazonses.com designates 54.240.11.147 as permitted sender) client-ip=54.240.11.147;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=kgiaa32e2nydr4uycqbiokaxmvfucv4q header.b=Nz1JH8EK;       dkim=pass header.i=@amazonses.com header.s=224i4yxa5dv7c2xz3womw6peuasteono header.b=IY5OD7Lx;       spf=pass (google.com: domain of 0100018847c664a0-86ebd6c4-3b87-401e-be80-21759e0211f8-000000@amazonses.com designates 54.240.11.147 as permitted sender) smtp.mailfrom=0100018847c664a0-86ebd6c4-3b87-401e-be80-21759e0211f8-000000@amazonses.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=kgiaa32e2nydr4uycqbiokaxmvfucv4q; d=securly.com; t=1684831364; h=Date:From:Reply-To:To:Cc:Message-ID:In-Reply-To:References:Subject:Mime-Version:Content-Type:Content-Transfer-Encoding:List-ID:List-Archive:List-Post:List-Unsubscribe; bh=9JrKAA4UBfS1ytkrWF8OWo30AeJ8lQbkqei9YMZ2BQ8=; b=Nz1JH8EKYdnYQ/UtiNN2u/7/7dnXECtEaOGM610LAaaqyDqmC5rovXDMdZTuvrG+ Gmhssoer0TjDtJYkVIUzLvxayl2kNSNp/z0I8j2rBOYs4ZBmFjq2fj20QKkIipsRms6 Vg9YdigjUH8/99mdMA7PxD2NOgO4Sh6OkHMM69jQ="
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1684831364; h=Date:From:Reply-To:To:Cc:Message-ID:In-Reply-To:References:Subject:Mime-Version:Content-Type:Content-Transfer-Encoding:List-ID:List-Archive:List-Post:List-Unsubscribe:Feedback-ID; bh=9JrKAA4UBfS1ytkrWF8OWo30AeJ8lQbkqei9YMZ2BQ8=; b=IY5OD7Lx3M1sIYvzzXbwEGUukY+pRDu8QG7pc8g85R2c7H/UIYQT82GmCChm1pI5 s/IhoiBhM5luQ9EbFiS1jNi2itjn1a/fLXVazKmenU4E3BZ+/NXk4LQch+W6Ub2zeB+ H4MaE8adKAxpMRJ0LPQoRYJQzsiUWrtR3LLnxYJM="
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 08:42:44 +0000"
          },
          {
            "name": "From",
            "value": "ashish <git@securly.com>"
          },
          {
            "name": "Reply-To",
            "value": "\"engineering/crextn_client\" <reply+AAAABPN334PPGZNAKDF4EAGCPGXQHEVBNHGUB4I@reply.g.securly.com>"
          },
          {
            "name": "To",
            "value": "\"engineering/crextn_client\" <git@securly.com>"
          },
          {
            "name": "Cc",
            "value": "pratikt <pratik.tiwari@securly.com>, Author <author@noreply.g.securly.com>"
          },
          {
            "name": "Message-ID",
            "value": "<0100018847c664a0-86ebd6c4-3b87-401e-be80-21759e0211f8-000000@email.amazonses.com>"
          },
          {
            "name": "In-Reply-To",
            "value": "<engineering/crextn_client/pull/306@g.securly.com>"
          },
          {
            "name": "References",
            "value": "<engineering/crextn_client/pull/306@g.securly.com>"
          },
          {
            "name": "Subject",
            "value": "Re: [engineering/crextn_client] feat: REL 5924 proxy identification (#306)"
          },
          {
            "name": "Mime-Version",
            "value": "1.0"
          },
          {
            "name": "Content-Type",
            "value": "multipart/alternative; boundary=\"--==_mimepart_646c7c83141a8_8b19b424878\"; charset=UTF-8"
          },
          {
            "name": "Content-Transfer-Encoding",
            "value": "7bit"
          },
          {
            "name": "Precedence",
            "value": "list"
          },
          {
            "name": "X-GitHub-Sender",
            "value": "ashish"
          },
          {
            "name": "X-GitHub-Recipient",
            "value": "pratikt"
          },
          {
            "name": "X-GitHub-Reason",
            "value": "author"
          },
          {
            "name": "List-ID",
            "value": "engineering/crextn_client <crextn_client.engineering.g.securly.com>"
          },
          {
            "name": "List-Archive",
            "value": "https://g.securly.com/engineering/crextn_client"
          },
          {
            "name": "List-Post",
            "value": "<mailto:reply+AAAABPN334PPGZNAKDF4EAGCPGXQHEVBNHGUB4I@reply.g.securly.com>"
          },
          {
            "name": "List-Unsubscribe",
            "value": "<mailto:unsub+AAAABPN334PPGZNAKDF4EAGCPGXQHEVBNHGUB4I@reply.g.securly.com>, <https://g.securly.com/notifications/unsubscribe/AAAABPNMY4KT6IA2AL66SN3XHR2AHANCNFSM2ZIG>"
          },
          {
            "name": "X-Auto-Response-Suppress",
            "value": "All"
          },
          {
            "name": "X-GitHub-Recipient-Address",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Feedback-ID",
            "value": "1.us-east-1.fifWeqhjf1+zK4CVuk2rZeClN3yfC4POaeFEHG1K+Pc=:AmazonSES"
          },
          {
            "name": "X-SES-Outgoing",
            "value": "2023.05.23-54.240.11.147"
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "text/plain",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/plain; charset=UTF-8"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "7bit"
              }
            ],
            "body": {
              "size": 810,
              "data": "QGFzaGlzaCBjb21tZW50ZWQgb24gdGhpcyBwdWxsIHJlcXVlc3QuDQoNCg0KDQo-ICsgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4uaW5jbHVkZXMoInNlY3VybHkuY29tIikpIHsNCisgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpOw0KKyAgICAgIHJldHVybjsNCisgICAgfQ0KKw0KKyAgICAvLyBDaGVjayBpZiBwcm94eSBpcyBhbHJlYWR5IGZvdW5kDQorICAgIGlmIChwcm94eUZvdW5kKSB7DQorICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsgLy8gU3RvcCB0aGUgaW50ZXJ2YWwNCisgICAgICBjb25zb2xlLmxvZygiSW50ZXJ2YWwgc3RvcHBlZC4iKTsNCisgICAgICByZXR1cm4gb25TdWNjZXNzZnVsbHlJZGVudGlmeVByb3h5KHByb3h5Rm91bmQsIHRhYklkKTsNCisgICAgfQ0KKw0KKyAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIHJlYWNoZWQgbWF4IHJldHJpZXMNCisgICAgaWYgKGNvdW50ID49IDcpIHsNCisgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpOyAvLyBTdG9wIHRoZSBpbnRlcnZhbA0KKyAgICAgIGNvbnNvbGUubG9nKCJMb29wIGNvbXBsZXRlZC4iKTsNCg0KUmVtb3ZlIGRlYnVnIGNvbnNvbGUubG9ncw0KDQotLSANCllvdSBhcmUgcmVjZWl2aW5nIHRoaXMgYmVjYXVzZSB5b3UgYXV0aG9yZWQgdGhlIHRocmVhZC4NClJlcGx5IHRvIHRoaXMgZW1haWwgZGlyZWN0bHkgb3IgdmlldyBpdCBvbiBHaXRIdWIgRW50ZXJwcmlzZToNCmh0dHBzOi8vZy5zZWN1cmx5LmNvbS9lbmdpbmVlcmluZy9jcmV4dG5fY2xpZW50L3B1bGwvMzA2I3B1bGxyZXF1ZXN0cmV2aWV3LTIxMTIx"
            }
          },
          {
            "partId": "1",
            "mimeType": "text/html",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/html; charset=UTF-8"
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "7bit"
              }
            ],
            "body": {
              "size": 2006,
              "data": "PHA-PC9wPg0KPHA-PGI-QGFzaGlzaDwvYj4gY29tbWVudGVkIG9uIHRoaXMgcHVsbCByZXF1ZXN0LjwvcD4NCg0KPGhyPg0KDQo8cD5JbiA8YSBocmVmPSJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNkaXNjdXNzaW9uX3I2MTM5Ij5hcHAvanMvUHJveHlJZGVudGlmaWNhdGlvblNlcnZpY2UuanM8L2E-OjwvcD4NCjxwcmUgc3R5bGU9J2NvbG9yOiM1NTUnPiZndDsgKyAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbi5pbmNsdWRlcygmcXVvdDtzZWN1cmx5LmNvbSZxdW90OykpIHsNCisgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpOw0KKyAgICAgIHJldHVybjsNCisgICAgfQ0KKw0KKyAgICAvLyBDaGVjayBpZiBwcm94eSBpcyBhbHJlYWR5IGZvdW5kDQorICAgIGlmIChwcm94eUZvdW5kKSB7DQorICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsgLy8gU3RvcCB0aGUgaW50ZXJ2YWwNCisgICAgICBjb25zb2xlLmxvZygmcXVvdDtJbnRlcnZhbCBzdG9wcGVkLiZxdW90Oyk7DQorICAgICAgcmV0dXJuIG9uU3VjY2Vzc2Z1bGx5SWRlbnRpZnlQcm94eShwcm94eUZvdW5kLCB0YWJJZCk7DQorICAgIH0NCisNCisgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSByZWFjaGVkIG1heCByZXRyaWVzDQorICAgIGlmIChjb3VudCAmZ3Q7PSA3KSB7DQorICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsgLy8gU3RvcCB0aGUgaW50ZXJ2YWwNCisgICAgICBjb25zb2xlLmxvZygmcXVvdDtMb29wIGNvbXBsZXRlZC4mcXVvdDspOw0KPC9wcmU-DQo8cD5SZW1vdmUgZGVidWcgY29uc29sZS5sb2dzPC9wPg0KDQo8cCBzdHlsZT0iZm9udC1zaXplOnNtYWxsOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDpub25lO2NvbG9yOiM2NjY7Ij4mbWRhc2g7PGJyIC8-WW91IGFyZSByZWNlaXZpbmcgdGhpcyBiZWNhdXNlIHlvdSBhdXRob3JlZCB0aGUgdGhyZWFkLjxiciAvPlJlcGx5IHRvIHRoaXMgZW1haWwgZGlyZWN0bHksIDxhIGhyZWY9Imh0dHBzOi8vZy5zZWN1cmx5LmNvbS9lbmdpbmVlcmluZy9jcmV4dG5fY2xpZW50L3B1bGwvMzA2I3B1bGxyZXF1ZXN0cmV2aWV3LTIxMTIxIj52aWV3IGl0IG9uIEdpdEh1YiBFbnRlcnByaXNlPC9hPiwgb3IgPGEgaHJlZj0iaHR0cHM6Ly9nLnNlY3VybHkuY29tL25vdGlmaWNhdGlvbnMvdW5zdWJzY3JpYmUtYXV0aC9BQUFBQlBMWVQyQjNIT1E1TDZLSDZTM1hIUjJBSEFOQ05GU00yWklHIj51bnN1YnNjcmliZTwvYT4uPGltZyBzcmM9Imh0dHBzOi8vZy5zZWN1cmx5LmNvbS9ub3RpZmljYXRpb25zL2JlYWNvbi9BQUFBQlBQV0gzVlBWUUdVR1NIWFVMVFhIUjJBSEE1Q05GU00yWklHVlJSVzYzTE5NVlhISVgzVVBGWUdMTUtRT1ZXR1lVVEZPRjJXSzQzVUtKU1hNMkxGTzZWR0czM05OVlNXNDVDN05GU00yVVVCLmdpZiIgaGVpZ2h0PSIxIiB3aWR0aD0iMSIgYWx0PSIiIC8-PC9wPg0KPHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj5bDQp7DQoiQGNvbnRleHQiOiAiaHR0cDovL3NjaGVtYS5vcmciLA0KIkB0eXBlIjogIkVtYWlsTWVzc2FnZSIsDQoicG90ZW50aWFsQWN0aW9uIjogew0KIkB0eXBlIjogIlZpZXdBY3Rpb24iLA0KInRhcmdldCI6ICJodHRwczovL2cuc2VjdXJseS5jb20vZW5naW5lZXJpbmcvY3JleHRuX2NsaWVudC9wdWxsLzMwNiNwdWxscmVxdWVzdHJldmlldy0yMTEyMSIsDQoidXJsIjogImh0dHBzOi8vZy5zZWN1cmx5LmNvbS9lbmdpbmVlcmluZy9jcmV4dG5fY2xpZW50L3B1bGwvMzA2I3B1bGxyZXF1ZXN0cmV2aWV3LTIxMTIxIiwNCiJuYW1lIjogIlZpZXcgUHVsbCBSZXF1ZXN0Ig0KfSwNCiJkZXNjcmlwdGlvbiI6ICJWaWV3IHRoaXMgUHVsbCBSZXF1ZXN0IG9uIEdpdEh1YiBFbnRlcnByaXNlIiwNCiJwdWJsaXNoZXIiOiB7DQoiQHR5cGUiOiAiT3JnYW5pemF0aW9uIiwNCiJuYW1lIjogIkdpdEh1YiIsDQoidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbSINCn0NCn0NCl08L3NjcmlwdD4="
            }
          }
        ]
      },
      "sizeEstimate": 9247,
      "historyId": "60720",
      "internalDate": "1684831364000"
    },
    {
      "id": "18847ae45059bd53",
      "threadId": "18847ae45059bd53",
      "labelIds": [
        "UNREAD",
        "IMPORTANT",
        "CATEGORY_FORUMS",
        "INBOX"
      ],
      "snippet": "Congratulations on your 1st work anniversary, Manjunath! Regards, Amol Mithari Technical Manager Securly www.securly.com Linkedin Facebook Twitter Instagram +91 8007659990",
      "payload": {
        "partId": "",
        "mimeType": "multipart/related",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:5dca:0:0:0:0:0 with SMTP id u10csp112078ocp;        Tue, 23 May 2023 01:16:23 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6830:3298:b0:6ad:da5d:5357 with SMTP id m24-20020a056830329800b006adda5d5357mr5938770ott.38.1684829783226;        Tue, 23 May 2023 01:16:23 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=3; a=rsa-sha256; t=1684829783; cv=pass;        d=google.com; s=arc-20160816;        b=azIdlyG6j2kTBQmKB8oCAXe4mTjy2kcKdFWoUAUCO9guo5w5ydOyvb/t+UzHMN+aEa         1ah87LHdmMQZDbK+rggh+t5+1ihtoOwHkw0vDtasGyrlh/YLvtYtR+xntoT42HjbckQU         ivKmY2EwAC0mArQEuwSiqs30FLD8HV+ZJU1XiqYbn5OeEAOQrVuAhD79EnAd1XRQYIP1         LJcRrIDo7t5nTuvSZFWtfsEEg9rI8TF/hQ6rr/isK4yFNjnQcW41EzZ1d+HXYQqd0apG         /LAF5rOppQs8Zt9DeTZdXm1G5wpG33xjMQclhnXzy7dTds2ZwWgxCNQx0j+0LP8xS3Ro         7ZxA=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=3; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=list-unsubscribe:list-archive:list-help:list-post:list-id         :mailing-list:precedence:to:subject:message-id:date:from         :mime-version:dkim-signature;        bh=NFqM3L6lYv6xiweP7ma8MpnvfX5JpFcyiC/8xXPmvvw=;        b=yiGgGheO3GKlqsf0dolSwjCiF+n7A7fTKvpRyosle+oVWZtQu+H04yoBqYwUDgei+t         SO6GEei49qbEGEexcNfEgeTaktpAGjPZ4EetkltInTbyxDWQ2GMAZJp3RI26aXHDe/9i         j7IUrZ4x+B/aGokc5Av+BeHgOnF4nmZ6w1tRGxWAPK7lnvw/X5D72IKnjPrvIJ94Yisc         3PgskTVmxrHhAJReT07HlAYZcEeQPd1chCeHLgaaxc8t9nemX/p13lBjthsHLNbdYAx+         8gP4KTYO4RvuBMmpShkCcRiZYLH+IlwsFGyviTuV8t47Balus9r8DtV0YVWnlMvgjnJA         rJnw=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=3; mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=SlNpGDU9;       arc=pass (i=2 spf=pass spfdomain=securly.com dkim=pass dkdomain=securly.com dmarc=pass fromdomain=securly.com);       spf=pass (google.com: domain of pune+bncbc55bh6ct4erbvpmwgrqmgqe3bhuu3y@securly.com designates 209.85.220.69 as permitted sender) smtp.mailfrom=pune+bncBC55BH6CT4ERBVPMWGRQMGQE3BHUU3Y@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Return-Path",
            "value": "<pune+bncBC55BH6CT4ERBVPMWGRQMGQE3BHUU3Y@securly.com>"
          },
          {
            "name": "Received",
            "value": "from mail-sor-f69.google.com (mail-sor-f69.google.com. [209.85.220.69])        by mx.google.com with SMTPS id l16-20020a056830335000b006adff1f0333sor2027734ott.2.2023.05.23.01.16.22        for <pratik.tiwari@securly.com>        (Google Transport Security);        Tue, 23 May 2023 01:16:23 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of pune+bncbc55bh6ct4erbvpmwgrqmgqe3bhuu3y@securly.com designates 209.85.220.69 as permitted sender) client-ip=209.85.220.69;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=SlNpGDU9;       arc=pass (i=2 spf=pass spfdomain=securly.com dkim=pass dkdomain=securly.com dmarc=pass fromdomain=securly.com);       spf=pass (google.com: domain of pune+bncbc55bh6ct4erbvpmwgrqmgqe3bhuu3y@securly.com designates 209.85.220.69 as permitted sender) smtp.mailfrom=pune+bncBC55BH6CT4ERBVPMWGRQMGQE3BHUU3Y@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "ARC-Seal",
            "value": "i=2; a=rsa-sha256; t=1684829782; cv=pass;        d=google.com; s=arc-20160816;        b=Vq4i412yttuBg7ImNntTqRvZzdbo29FbGf55RDvHMfGz53L64e4v1ecSG4Rej7oYs+         zf0Efn01TZMuP1FBJwWTpgB0md8xUkFFVBuP6c72McMS8j3zwEFiARle9W9e8txEYdrV         N7GhE64dvbOzpgouXxajxDy9CcuOXzYNLoLhv+0t3/jfioF4/YTiC6I0XD8f3/pZXot0         VrG6wipkPepLVT0Nh6nhZ6KUNhSOth84Gqdm/yPjNj2tz1jMT5b1Ws2VB+e0h3vhdFdE         VOSwBDboT8T7dh0k+brYizM4X07yXvYG4/Y+UPFfu+Boi8+bExQCMevv+JpCwpGx6rTv         VDLQ=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=2; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=list-unsubscribe:list-archive:list-help:list-post:list-id         :mailing-list:precedence:to:subject:message-id:date:from         :mime-version:dkim-signature;        bh=NFqM3L6lYv6xiweP7ma8MpnvfX5JpFcyiC/8xXPmvvw=;        b=AjMYnRgjVCYzdMowAmP+qxSy/gLovkMAvtgyUIaUdZuQTXZtyrWfHIFjJDe6OIDPQm         mPA7Iyp51jhTacFeAWgdvim0GUEXVqvOs6LmXXMfw4vrGP2ZZ7cpAmduTZ9Mvc8uNCXz         XFZ7tSP5hsIm1+Zll4O6UY2vRa6ECU+98/nAMtgK5nw6kONYwhmDb7iSromRcs3heRLF         6N9+d+oRhtJTHB7V4vrTHK1rVKr21Ab6/LxijmJbxKxK5l4bodGCZdQS5WeNMuoI54w0         c5bclT/0OrRuhVnaJ202JkNTcpixdgDhQWEAZcqQCcabERlh4cgyIyt+fmBL/g/Afsmk         jjKw=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=2; mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=HsuYP1xC;       spf=pass (google.com: domain of amol@securly.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=amol@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=securly.com; s=google; t=1684829782; x=1687421782;        h=list-unsubscribe:list-archive:list-help:list-post:list-id         :mailing-list:precedence:x-original-authentication-results         :x-original-sender:to:subject:message-id:date:from:mime-version:from         :to:cc:subject:date:message-id:reply-to;        bh=NFqM3L6lYv6xiweP7ma8MpnvfX5JpFcyiC/8xXPmvvw=;        b=SlNpGDU9MpyhNpqIrm3/FtjGsWZx5fqgR4G+kTgPui3mjpkipB9wpgocPTTueLuaia         obbyatqYBkuijvTdHEvgGBN4KuSG9C5gYRYHxbYyz/xK4fE+epYnDRi15swNGmumTBvj         iwylpieu8CjRQwk4Tt8l3mLrgfvSoMm3R8CDyIFD6OFYTit0s1tSRoEVhYLtHXIGiVaI         5BTwMfJoabMw9l2Bj4IBK2j64XiGkiRuLBrI0vuXKBto03mAnFqEStOIYnWckbYGiHmF         o3PlwOqJZTSYrWNqnqJ8HcYbu7cTFPDu27c3peXOA+CPK8WYoz0sogkxxM+nG6AZ/XJM         kX2w=="
          },
          {
            "name": "X-Google-DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20221208; t=1684829782; x=1687421782;        h=list-unsubscribe:list-archive:list-help:list-post         :x-spam-checked-in-group:list-id:mailing-list:precedence         :x-original-authentication-results:x-original-sender:to:subject         :message-id:date:from:mime-version:x-beenthere:x-gm-message-state         :from:to:cc:subject:date:message-id:reply-to;        bh=NFqM3L6lYv6xiweP7ma8MpnvfX5JpFcyiC/8xXPmvvw=;        b=kvGtuSrAY7eTZ+3y1zaAVDzEAuykkuK9XqqZaGOZ3bXwTwGq30IppIKLLPyf5yKX6H         Jl4I0l6C4ixT5glKZ3hSld3FnmnvZnlNwteHIZufEXDWW56qgTecsdipJlT95mbXq6Vb         edjkN+GkYxhvNueIuVwO5clIm/wkgALLVESSvfniy0DFd1fpmhE5vUEZVx05SY11J9eI         YJmHXECMPmjV1VzfOF64FhVxmA7az7fIjLEXbL7cMwAWjF0nlpMCFXV7YcSJezxZmWK0         Vnu9oYCLk2j3bEL3siXG2DdI/bzueTUrWsczka48VsLaoGf84SLJKAxwvbLJJQIkHNB5         EiWw=="
          },
          {
            "name": "X-Gm-Message-State",
            "value": "AC+VfDwOJ6V6vH0i0TtAihzS2vHHB+2c9pfED5+lVPh8uG4PQH6yXGNe YE6/yShxkYp+NsIL+vEuRPI4veFR"
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ6E+0NgTGGxg9ukCQdyMWWPFzD6Eg129NOeRFlH/UOfLV0kX86mLZL8jc5FrWGmFwoZm+fwkw=="
          },
          {
            "name": "X-Received",
            "value": "by 2002:a9d:6297:0:b0:6ac:a378:15a3 with SMTP id x23-20020a9d6297000000b006aca37815a3mr3556754otk.4.1684829782328;        Tue, 23 May 2023 01:16:22 -0700 (PDT)"
          },
          {
            "name": "X-BeenThere",
            "value": "pune@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:a05:6871:6a94:b0:19a:c3ee:b136 with SMTP id zf20-20020a0568716a9400b0019ac3eeb136ls15514oab.1.-pod-prod-02-us; Tue, 23 May 2023 01:16:21 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6870:c801:b0:195:c46d:496f with SMTP id ee1-20020a056870c80100b00195c46d496fmr5810044oab.8.1684829780547;        Tue, 23 May 2023 01:16:20 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684829780; cv=none;        d=google.com; s=arc-20160816;        b=x4sYXohhj0CzOX9W0C2QssVbt1R0N6Z45fnKnFwj6mziQVlZyGncPGVwS7NdpGsNoD         tB+kaA0YDv6clzDNHiilSNqDGAJISXtlg3/mIa0VQaSB9nN8TZLctCCuUocCbwEO/EMf         cSYof+lggvRXvpsfeMSnIgyf3pYmfebZFd/nAB2KhTXfEurGK0YWl8wU7uNAYkIljP3X         76GJBwBSRu0V9UjOXSd+ykhawmhD5VkYLdgMW9fqjXfabMFge0ENIqNHswquVqCkFpaf         Bh9YOO8FJSt/8eABNyS06/KN9nJklVJtuHUcONOd+Iy2cKIpmXgv6BEXXn/cnP0emXIo         3dfA=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=to:subject:message-id:date:from:mime-version:dkim-signature;        bh=NFqM3L6lYv6xiweP7ma8MpnvfX5JpFcyiC/8xXPmvvw=;        b=S+iQW20D8w45nbyU6ODEE1CuYyhvUPLAb0egB9sh1yimtqQKO1yzQEVHaqgffXRHZ6         eUoUmREDOLJRkCJJvQEljWGd4ZYNqPaNhI0SRKpihCBrt80C0lO/UzjeEuU1LV5y2k83         MLbPIzfbMFT2HrQFI9OGKnkS4l6s+wjwbsu9HMbOxNQhfTzqm7zl44yO2kX+czzopfYu         jrLQbKyW8gbnENTeS+/Swjr/4BI+EiSC1LYLvMMc7157XEM5dsJ9tebvYaMYZylXUZT5         oQQChrVaNq6fUYAz4YBNvvm58XpfOAV6YCQcXZCaf/kbqw2g9rnur/yPMtdQqF/zoK4m         BEKw=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=HsuYP1xC;       spf=pass (google.com: domain of amol@securly.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=amol@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Received",
            "value": "from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])        by mx.google.com with SMTPS id ec14-20020a0568708c0e00b001927f20466dsor737040oab.5.2023.05.23.01.16.20        for <pune@securly.com>        (Google Transport Security);        Tue, 23 May 2023 01:16:20 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of amol@securly.com designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41;"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6870:8c26:b0:191:d6cd:6f5b with SMTP id ec38-20020a0568708c2600b00191d6cd6f5bmr6852386oab.22.1684829778942; Tue, 23 May 2023 01:16:18 -0700 (PDT)"
          },
          {
            "name": "MIME-Version",
            "value": "1.0"
          },
          {
            "name": "From",
            "value": "Amol Mithari <amol@securly.com>"
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 13:45:43 +0530"
          },
          {
            "name": "Message-ID",
            "value": "<CAKQTROe_eAZG3_ehD=FENv3YxLpbcXsS0BF4fBmUG8Q_ZXKzDw@mail.gmail.com>"
          },
          {
            "name": "Subject",
            "value": "Happy 1st work anniversary, Manjunath!"
          },
          {
            "name": "To",
            "value": "pune@securly.com"
          },
          {
            "name": "Content-Type",
            "value": "multipart/related; boundary=\"0000000000007b7a4105fc580094\""
          },
          {
            "name": "X-Original-Sender",
            "value": "amol@securly.com"
          },
          {
            "name": "X-Original-Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@securly.com header.s=google header.b=HsuYP1xC;       spf=pass (google.com: domain of amol@securly.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=amol@securly.com;       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=securly.com"
          },
          {
            "name": "Precedence",
            "value": "list"
          },
          {
            "name": "Mailing-list",
            "value": "list pune@securly.com; contact pune+owners@securly.com"
          },
          {
            "name": "List-ID",
            "value": "<pune.securly.com>"
          },
          {
            "name": "X-Spam-Checked-In-Group",
            "value": "pune@securly.com"
          },
          {
            "name": "X-Google-Group-Id",
            "value": "544230904613"
          },
          {
            "name": "List-Post",
            "value": "<https://groups.google.com/a/securly.com/group/pune/post>, <mailto:pune@securly.com>"
          },
          {
            "name": "List-Help",
            "value": "<https://support.google.com/a/securly.com/bin/topic.py?topic=25838>, <mailto:pune+help@securly.com>"
          },
          {
            "name": "List-Archive",
            "value": "<https://groups.google.com/a/securly.com/group/pune/>"
          },
          {
            "name": "List-Unsubscribe",
            "value": "<mailto:googlegroups-manage+544230904613+unsubscribe@googlegroups.com>, <https://groups.google.com/a/securly.com/group/pune/subscribe>"
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "multipart/alternative",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"0000000000007b7a4005fc580093\""
              }
            ],
            "body": {
              "size": 0
            },
            "parts": [
              {
                "partId": "0.0",
                "mimeType": "text/plain",
                "filename": "",
                "headers": [
                  {
                    "name": "Content-Type",
                    "value": "text/plain; charset=\"UTF-8\""
                  }
                ],
                "body": {
                  "size": 488,
                  "data": "IENvbmdyYXR1bGF0aW9ucyBvbiB5b3VyIDFzdCB3b3JrIGFubml2ZXJzYXJ5LCBNYW5qdW5hdGghDQoNCltpbWFnZTogQ29uZ3JhdHVsYXRpb25zLCBNYW5qdW5hdGghLnBuZ10NCg0KDQpSZWdhcmRzLA0KDQpBbW9sIE1pdGhhcmkNClRlY2huaWNhbCBNYW5hZ2VyDQoNCltpbWFnZTogU2VjdXJseV0gPGh0dHBzOi8vc2VjdXJseS5jb20vPg0KDQpbaW1hZ2U6IFdlYnNpdGVdIHd3dy5zZWN1cmx5LmNvbQ0KDQoNCltpbWFnZTogTGlua2VkaW5dIDxodHRwczovL2luLmxpbmtlZGluLmNvbS9jb21wYW55L3NlY3VybHk-IFtpbWFnZToNCkZhY2Vib29rXSA8aHR0cDovL2ZhY2Vib29rLmNvbS9zZWN1cmx5aW5jPiBbaW1hZ2U6IFR3aXR0ZXJdDQo8aHR0cDovL3R3aXR0ZXIuY29tL3NlY3VybHk-IFtpbWFnZTogSW5zdGFncmFtXQ0KPGh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2VjdXJseWluYy8-DQoNCltpbWFnZTogUGhvbmVdICs5MSA4MDA3NjU5OTkwDQo="
                }
              },
              {
                "partId": "0.1",
                "mimeType": "text/html",
                "filename": "",
                "headers": [
                  {
                    "name": "Content-Type",
                    "value": "text/html; charset=\"UTF-8\""
                  },
                  {
                    "name": "Content-Transfer-Encoding",
                    "value": "quoted-printable"
                  }
                ],
                "body": {
                  "size": 5177,
                  "data": "PGRpdiBkaXI9Imx0ciI-DQo8c3BhbiBjbGFzcz0iZ21haWwtaW0iPjxkaXY-Q29uZ3JhdHVsYXRpb25zIG9uIHlvdXIgMXN0IHdvcmsgYW5uaXZlcnNhcnksIE1hbmp1bmF0aCE8L2Rpdj48L3NwYW4-PGRpdj48YnI-PC9kaXY-PGRpdj48aW1nIHNyYz0iY2lkOmlpX2xpMDAybzl0MCIgYWx0PSJDb25ncmF0dWxhdGlvbnMsIE1hbmp1bmF0aCEucG5nIiB3aWR0aD0iMzUzIiBoZWlnaHQ9IjQ5OSI-PGJyPjxicj48L2Rpdj48ZGl2Pjxicj48L2Rpdj48ZGl2PlJlZ2FyZHMsPGJyPjwvZGl2Pg0KDQo8ZGl2PjxkaXYgZGlyPSJsdHIiIGNsYXNzPSJnbWFpbF9zaWduYXR1cmUiIGRhdGEtc21hcnRtYWlsPSJnbWFpbF9zaWduYXR1cmUiPjxkaXYgZGlyPSJsdHIiPjx0YWJsZSBzdHlsZT0iYm9yZGVyLXNwYWNpbmc6MHB4O2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7bWFyZ2luOjBweCBhdXRvO2NvbG9yOnJnYigwLDAsMCk7Zm9udC1mYW1pbHk6JnF1b3Q7VGltZXMgTmV3IFJvbWFuJnF1b3Q7O2ZvbnQtc2l6ZTptZWRpdW07Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC1pbmRlbnQ6MHB4O3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm9ybWFsO3dvcmQtc3BhY2luZzowcHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpIiB3aWR0aD0iMTAwJSIgY2VsbHNwYWNpbmc9IjAiIGNlbGxwYWRkaW5nPSIwIiBib3JkZXI9IjAiIGJnY29sb3I9IiNGRkZGRkYiIGFsaWduPSJsZWZ0Ij48dGJvZHk-PHRyPjx0ZD48dGFibGUgc3R5bGU9ImJvcmRlci1zcGFjaW5nOjBweDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7dGFibGUtbGF5b3V0OmZpeGVkO21hcmdpbjphdXRvIiB3aWR0aD0iMzcwIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiIGJvcmRlcj0iMCIgYWxpZ249ImxlZnQiPjx0Ym9keT48dHI-PHRkIHN0eWxlPSJmb250LWZhbWlseTomcXVvdDtIZWx2ZXRpY2EgTmV1ZSBCb2xkJnF1b3Q7LHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToyMHB4O2xpbmUtaGVpZ2h0OjI2cHg7Y29sb3I6cmdiKDIzLDI3LDMxKSI-PHAgc3R5bGU9Im1hcmdpbjowcHgiPkFtb2wgTWl0aGFyaTwvcD48L3RkPjwvdHI-PHRyPjx0ZCBzdHlsZT0iZm9udC1mYW1pbHk6JnF1b3Q7SGVsdmV0aWNhIE5ldWUgTFQgUHJvJnF1b3Q7LHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE4cHg7Y29sb3I6cmdiKDIzLDI3LDMxKSI-VGVjaG5pY2FsIE1hbmFnZXI8L3RkPjwvdHI-PC90Ym9keT48L3RhYmxlPjwvdGQ-PC90cj48dHI-PHRkPjx0YWJsZSBzdHlsZT0iYm9yZGVyLXNwYWNpbmc6MHB4O2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7bWFyZ2luOmF1dG8iIHdpZHRoPSIzNzAiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCIgYm9yZGVyPSIwIiBhbGlnbj0ibGVmdCI-PHRib2R5Pjx0cj48dGQgc3R5bGU9InBhZGRpbmctcmlnaHQ6MTBweCIgd2lkdGg9IjE4MiIgdmFsaWduPSJ0b3AiIGFsaWduPSJsZWZ0Ij48dGFibGUgc3R5bGU9ImJvcmRlci1zcGFjaW5nOjBweDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7dGFibGUtbGF5b3V0OmF1dG87bWFyZ2luOmF1dG8iIHdpZHRoPSIxMDAlIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiIGJvcmRlcj0iMCIgYWxpZ249ImxlZnQiPjx0Ym9keT48dHI-PHRkIHN0eWxlPSJmb250LXNpemU6MXB4O2xpbmUtaGVpZ2h0OjEycHgiIGhlaWdodD0iMTIiPsKgPC90ZD48L3RyPjx0cj48dGQ-PGEgaHJlZj0iaHR0cHM6Ly9zZWN1cmx5LmNvbS8iIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jayIgdGFyZ2V0PSJfYmxhbmsiPjxpbWcgYWx0PSJTZWN1cmx5IiBzcmM9Imh0dHBzOi8vc2VuZHkuc2VjdXJseS5jb20vdXBsb2Fkcy8xNTg1MTE3NjIyLmdpZiIgYm9yZGVyPSIwIj48L2E-PC90ZD48L3RyPjx0cj48dGQgc3R5bGU9ImZvbnQtc2l6ZToxcHg7bGluZS1oZWlnaHQ6NXB4IiBoZWlnaHQ9IjUiPsKgPC90ZD48L3RyPjx0cj48dGQ-PHRhYmxlIHN0eWxlPSJib3JkZXItc3BhY2luZzowcHg7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO3RhYmxlLWxheW91dDphdXRvO21hcmdpbjphdXRvIiB3aWR0aD0iMTAwJSIgY2VsbHNwYWNpbmc9IjAiIGNlbGxwYWRkaW5nPSIwIiBib3JkZXI9IjAiIGFsaWduPSJsZWZ0Ij48dGJvZHk-PHRyPjx0ZCBzdHlsZT0idmVydGljYWwtYWxpZ246bWlkZGxlIiB3aWR0aD0iMTkiIHZhbGlnbj0ibWlkZGxlIiBhbGlnbj0ibGVmdCI-PGltZyBhbHQ9IldlYnNpdGUiIHNyYz0iaHR0cHM6Ly9zZW5keS5zZWN1cmx5LmNvbS91cGxvYWRzLzE1ODM5ODgwMTQucG5nIiBzdHlsZT0idmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZTowcHgiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgYm9yZGVyPSIwIj48L3RkPjx0ZCBzdHlsZT0iZm9udC1mYW1pbHk6JnF1b3Q7SGVsdmV0aWNhIE5ldWUgTFQgUHJvJnF1b3Q7LHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjE4cHg7Y29sb3I6cmdiKDIzLDI3LDMxKTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGUiIHZhbGlnbj0ibWlkZGxlIj48YSBocmVmPSJodHRwczovL3d3dy5zZWN1cmx5LmNvbS8iIHN0eWxlPSJjb2xvcjpyZ2IoMTYsODUsMjA0KTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIiB0YXJnZXQ9Il9ibGFuayI-d3d3LnNlY3VybHkuY29tPC9hPjwvdGQ-PC90cj48L3Rib2R5PjwvdGFibGU-PC90ZD48L3RyPjx0cj48dGQgc3R5bGU9ImZvbnQtc2l6ZToxcHg7bGluZS1oZWlnaHQ6N3B4IiBoZWlnaHQ9IjciPsKgPC90ZD48L3RyPjwvdGJvZHk-PC90YWJsZT48L3RkPjx0ZCB3aWR0aD0iMTYwIiB2YWxpZ249InRvcCIgYWxpZ249ImxlZnQiPjx0YWJsZSBzdHlsZT0iYm9yZGVyLXNwYWNpbmc6MHB4O2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt0YWJsZS1sYXlvdXQ6YXV0bzttYXJnaW46YXV0byIgd2lkdGg9IjkyJSIgY2VsbHNwYWNpbmc9IjAiIGNlbGxwYWRkaW5nPSIwIiBib3JkZXI9IjAiIGFsaWduPSJsZWZ0Ij48dGJvZHk-PHRyPjx0ZCBzdHlsZT0iZm9udC1zaXplOjFweDtsaW5lLWhlaWdodDoxOHB4IiBoZWlnaHQ9IjE4Ij7CoDwvdGQ-PC90cj48dHI-PHRkIHdpZHRoPSIzMiI-PGEgaHJlZj0iaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vY29tcGFueS9zZWN1cmx5IiB0aXRsZT0iTGlua2VkaW4iIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jayIgdGFyZ2V0PSJfYmxhbmsiPjxpbWcgYWx0PSJMaW5rZWRpbiIgc3JjPSJodHRwczovL3NlbmR5LnNlY3VybHkuY29tL3VwbG9hZHMvMTU4Mzk4NzgxOS5wbmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgYm9yZGVyPSIwIj48L2E-PC90ZD48dGQgd2lkdGg9IjMyIj48YSBocmVmPSJodHRwOi8vZmFjZWJvb2suY29tL3NlY3VybHlpbmMiIHRpdGxlPSJGYWNlYm9vayIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrIiB0YXJnZXQ9Il9ibGFuayI-PGltZyBhbHQ9IkZhY2Vib29rIiBzcmM9Imh0dHBzOi8vc2VuZHkuc2VjdXJseS5jb20vdXBsb2Fkcy8xNTgzOTg3NzkyLnBuZyIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiBib3JkZXI9IjAiPjwvYT48L3RkPjx0ZCB3aWR0aD0iMzIiPjxhIGhyZWY9Imh0dHA6Ly90d2l0dGVyLmNvbS9zZWN1cmx5IiB0aXRsZT0iVHdpdHRlciIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrIiB0YXJnZXQ9Il9ibGFuayI-PGltZyBhbHQ9IlR3aXR0ZXIiIHNyYz0iaHR0cHM6Ly9zZW5keS5zZWN1cmx5LmNvbS91cGxvYWRzLzE1ODM5ODc3MzQucG5nIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIGJvcmRlcj0iMCI-PC9hPjwvdGQ-PHRkIHdpZHRoPSIzMiI-PGEgaHJlZj0iaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zZWN1cmx5aW5jLyIgdGl0bGU9Ikluc3RhZ3JhbSIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrIiB0YXJnZXQ9Il9ibGFuayI-PGltZyBhbHQ9Ikluc3RhZ3JhbSIgc3JjPSJodHRwczovL3NlbmR5LnNlY3VybHkuY29tL3VwbG9hZHMvMTU4Mzk4Nzg1NC5wbmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgYm9yZGVyPSIwIj48L2E-PC90ZD48L3RyPjwvdGJvZHk-PC90YWJsZT48dGFibGUgc3R5bGU9ImJvcmRlci1zcGFjaW5nOjBweDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7dGFibGUtbGF5b3V0OmF1dG87bWFyZ2luOmF1dG8iIHdpZHRoPSIxMDAlIiBjZWxsc3BhY2luZz0iMCIgY2VsbHBhZGRpbmc9IjAiIGJvcmRlcj0iMCIgYWxpZ249ImNlbnRlciI-PHRib2R5Pjx0cj48dGQgc3R5bGU9ImZvbnQtc2l6ZToxcHg7bGluZS1oZWlnaHQ6OXB4IiBoZWlnaHQ9IjkiPsKgPC90ZD48L3RyPjx0cj48dGQ-PHRhYmxlIHN0eWxlPSJib3JkZXItc3BhY2luZzowcHg7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO3RhYmxlLWxheW91dDphdXRvO21hcmdpbjphdXRvIiB3aWR0aD0iMTAwJSIgY2VsbHNwYWNpbmc9IjAiIGNlbGxwYWRkaW5nPSIwIiBib3JkZXI9IjAiIGFsaWduPSJjZW50ZXIiPjx0Ym9keT48dHI-PHRkIHN0eWxlPSJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGUiIHdpZHRoPSIxOSIgdmFsaWduPSJtaWRkbGUiIGFsaWduPSJsZWZ0Ij48aW1nIGFsdD0iUGhvbmUiIHNyYz0iaHR0cHM6Ly9zZW5keS5zZWN1cmx5LmNvbS91cGxvYWRzLzE1ODM5OTEzNDcucG5nIiBzdHlsZT0idmVydGljYWwtYWxpZ246bWlkZGxlO2ZvbnQtc2l6ZTowcHgiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgYm9yZGVyPSIwIj48L3RkPjx0ZCBzdHlsZT0iZm9udC1mYW1pbHk6JnF1b3Q7SGVsdmV0aWNhIE5ldWUgTFQgUHJvJnF1b3Q7LHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjE4cHg7Y29sb3I6cmdiKDIzLDI3LDMxKTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGUiIHZhbGlnbj0ibWlkZGxlIj4rOTEgODAwNzY1OTk5MDwvdGQ-PC90cj48L3Rib2R5PjwvdGFibGU-PC90ZD48L3RyPjwvdGJvZHk-PC90YWJsZT48L3RkPjwvdHI-PC90Ym9keT48L3RhYmxlPjwvdGQ-PC90cj48L3Rib2R5PjwvdGFibGU-PC9kaXY-PC9kaXY-PC9kaXY-PC9kaXY-DQo="
                }
              }
            ]
          },
          {
            "partId": "1",
            "mimeType": "image/png",
            "filename": "Congratulations, Manjunath!.png",
            "headers": [
              {
                "name": "Content-Type",
                "value": "image/png; name=\"Congratulations, Manjunath!.png\""
              },
              {
                "name": "Content-Disposition",
                "value": "inline; filename=\"Congratulations, Manjunath!.png\""
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "base64"
              },
              {
                "name": "Content-ID",
                "value": "<ii_li002o9t0>"
              },
              {
                "name": "X-Attachment-Id",
                "value": "ii_li002o9t0"
              }
            ],
            "body": {
              "attachmentId": "ANGjdJ852IXZ6fEBdfY_c-8vx4CWQh_GA9XsWQLTSFSi_ia9KhFazCldAehTQTmT4wJDBbZsgZ147-e72jKptrAp8aNN6B_5uJP0FKnTFNAFYHAOlUmzGEv7DoRtnMphBOZzehUnLkul71DUrvc10-ftn7ie6eq_4uosdG0TthIJRdaKl18RpNxkSpB2gDu20Fy432NjNK9ydBN0MxX4H_2S3Gpb1pM6dugs1qL5lcLnNWxIIZghR-XoCy8EZfgD-Uht5zHhMeI1VjeqzBkBFbMu2_UmMIby9G0px1Ol03fVKC5FsqgTPRGsPatUEzQxUzziguXdac__upCY50QRq3Q6myq2-fY-5q5JLdrV20FqMrGz4NX0RZL3g01uI3HQIKLbtDn-4z6cCoEO6dOC",
              "size": 1472955
            }
          }
        ]
      },
      "sizeEstimate": 2033160,
      "historyId": "60719",
      "internalDate": "1684829743000"
    },
    {
      "id": "18844da0bb760f92",
      "threadId": "18844da0bb760f92",
      "labelIds": [
        "IMPORTANT",
        "CATEGORY_UPDATES",
        "INBOX"
      ],
      "snippet": "I&#39;ve been using Google Calendar to organize my schedule, find interesting events, and share my schedule with friends and family members. I&#39;d like to be able to view your calendar to make",
      "payload": {
        "partId": "",
        "mimeType": "multipart/alternative",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:774c:0:0:0:0:0 with SMTP id d12csp1560402ocu;        Mon, 22 May 2023 12:05:20 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a05:6512:49e:b0:4ef:ff42:b13 with SMTP id v30-20020a056512049e00b004efff420b13mr3333091lfq.65.1684782320238;        Mon, 22 May 2023 12:05:20 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684782320; cv=none;        d=google.com; s=arc-20160816;        b=rURWtSCOgVHZMgKNuPuW11KBItwVmGGWlOELIh5I7m2eyXqtvrakDC9h9hepAg/hZh         qHbnQasnrwrq/LmYal1o8ut29LJpXIIfB8XKJoNZvOySe1Z9YnpUJ9HCefW7YlrWfSKo         Zz+26Lzc+0davi/kEQ8CYau8y/35Ih/f6LGZyiqLuFsNMhYR71ABeRSnGh3/AG6kD69w         0zk7lMYgfCaUKrDgwMch4VS5UtlUcsIJwvktFOT7W2qqEmo7Hzdv5xJp2KfiPjgtJ4Da         OX/Pa9vu8kOcmO8OZp2snXCMSdC+SqgkOKzhpra4R7KTjxINABgrqC6tbfFneP84IBEy         H1qg=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:dkim-signature:dkim-signature;        bh=b6xsvXKjFM5pYYMhcZ2TSSEUpjlef+1AaI36J6GEqLE=;        b=tvoxEd+JvSeWFqt99Ps5Gd3VChZxwUsPJkSn8lC7harVy0v57wYruQsdCBlU/4BRcF         Ta6uohVSC5A/YZGTb60zhvhrWSweRF0clKAY9gCCrq1QAteZ58SDjHh98Qwn9krcf551         dEBA8IzkfSJ/JXzoGQu7/nXbIQczyvT5f2h6BH1KgWI4FBObTVDHmnAnbNBaN1MOCTV7         PtVS8jJQnGoonbufV9PwnXUjEe96o2CD1/iGGc/WzcStSGeegLzb9nk5yzS3I3diT8gh         Oc/x5z6rKNgp63lBgFhk84HNH93gpX6XWkX0RvTq1Sk4ZjYlj9QvJc56udo0iGXu5HeD         HaTQ=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@google.com header.s=20221208 header.b=6aVCVR1d;       dkim=pass header.i=@gmail.com header.s=20221208 header.b=n17Ild+k;       spf=pass (google.com: domain of 377xrzawjduitvexmo645cmhkqemp.gsqtvexmo.xm0evmwigyvp2.gsq@calendar-server.bounces.google.com designates 209.85.220.73 as permitted sender) smtp.mailfrom=377xrZAwJDUItvexmo645Cmhkqemp.gsqtvexmo.xm0evmwigyvp2.gsq@calendar-server.bounces.google.com;       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com"
          },
          {
            "name": "Return-Path",
            "value": "<377xrZAwJDUItvexmo645Cmhkqemp.gsqtvexmo.xm0evmwigyvp2.gsq@calendar-server.bounces.google.com>"
          },
          {
            "name": "Received",
            "value": "from mail-sor-f73.google.com (mail-sor-f73.google.com. [209.85.220.73])        by mx.google.com with SMTPS id q23-20020a05651232b700b004effe9b3701sor1294553lfe.1.2023.05.22.12.05.20        for <pratik.tiwari@securly.com>        (Google Transport Security);        Mon, 22 May 2023 12:05:20 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of 377xrzawjduitvexmo645cmhkqemp.gsqtvexmo.xm0evmwigyvp2.gsq@calendar-server.bounces.google.com designates 209.85.220.73 as permitted sender) client-ip=209.85.220.73;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@google.com header.s=20221208 header.b=6aVCVR1d;       dkim=pass header.i=@gmail.com header.s=20221208 header.b=n17Ild+k;       spf=pass (google.com: domain of 377xrzawjduitvexmo645cmhkqemp.gsqtvexmo.xm0evmwigyvp2.gsq@calendar-server.bounces.google.com designates 209.85.220.73 as permitted sender) smtp.mailfrom=377xrZAwJDUItvexmo645Cmhkqemp.gsqtvexmo.xm0evmwigyvp2.gsq@calendar-server.bounces.google.com;       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=google.com; s=20221208; t=1684782320; x=1687374320;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:from:to:cc:subject:date:message-id:reply-to;        bh=b6xsvXKjFM5pYYMhcZ2TSSEUpjlef+1AaI36J6GEqLE=;        b=6aVCVR1djzZRio90/SjkBgrG4ITWg8jP9i4bVp3UI9PEMu+sN1tO3709sHVISAU4aY         vlFPePxQHaiQxYVmdDdA3k1dBZHbelfFmOVym4H6X2Dc9SS2Ow8Q1VUc19PfI8dlFUAG         9JLJwt4uSxbt3UzvS+GtQu/lQXmBp7IldAcmPn44eGQKYODrTCxiXyxC2Tj6dNIE51vq         Ft86ozaWQjoBv5hT1kUXfEWPWzaN7CLA7xj5Hf7vaQd5sBK1BHocxVOx9ml+N02JA5nE         IH6pHGyBgHgjpR6mluOTvYV0xO4QJSmr6bfVvsOj33w9XA8CoQ93HSFYFXgDXtqmjFdn         5qDA=="
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20221208; t=1684782320; x=1687374320;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:from:to:cc:subject:date:message-id:reply-to;        bh=b6xsvXKjFM5pYYMhcZ2TSSEUpjlef+1AaI36J6GEqLE=;        b=n17Ild+kDpaECGN3YQeokPUk6qsk2sL9IQFifpLNnaeHHRqsmlPMFbQdz73jurjCNH         /vpp3abn49WnjSIAmRJ2z5uLYaG1uJvtJdmZv9kMWBPzQ3Z5VGvzSEwINvpbVQpWt2ZY         U4zWSe8blu7tRzlnmhumpLxEm98SsMOc/92vdJNKBnsPICtgx+zg/8/+qha2+UWYCNtS         OecAQTZZDOHY12jMJg8K2x7AjGmiMk6BOJ83AUubdRWo2qGYxvkSWbQUL9cLlpCykPCO         dvtF1CWzDOXkOtwj2d4UexLblRbXwMVQuD/+WzIRqt4LjvnoOp5H7RqxWQ/Li6u9nxkn         oY9A=="
          },
          {
            "name": "X-Google-DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20221208; t=1684782320; x=1687374320;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:x-gm-message-state:from:to:cc:subject:date:message-id         :reply-to;        bh=b6xsvXKjFM5pYYMhcZ2TSSEUpjlef+1AaI36J6GEqLE=;        b=PnBVFwqOa4qfmEve09XFiPsFBKKF5Mxz5SiXxIKPhImv3/nQcUqbCylo6mEQ2CxSI9         iyeWYfX8/bH79zmyiYHW0b1KsKaGOvHTfOMiE1GxAUfyhWE3aMaTWDtUVnPr17iw+gCa         d3dLOHDeNDc/HR7ERDdUeZjo77YaJkH10ht6NlI9fYqKt1om1lb7C1NmNknL2SFB3Ymg         QBVz6nX5VTZmUsicSDGp1LePsgdZsUjp42wApqBwyme89svT896CaKapocwExO2A1xRb         mx7OXF7jqJ1y4e7ATp269My8j01QO+xjXjsbIB4caoLO5Kt8VScodUuubf5c/bihLQr4         R4IA=="
          },
          {
            "name": "X-Gm-Message-State",
            "value": "AC+VfDz32iL20HmVJTTrK0JG0LpgBoeV2j2c4SPkRSqHzxwAaFF2OrgR CY9/zKHeGrJsW8iSkpdurRGXVdvkZQTMp6ltndLbgw=="
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ7qzxqG7mSp70yM6xhbrT2mozLathYk2WoK4KUcNMuISeAAPMZ7Yp6lkz06JmymnIBaoHyJpZBau8dL6hQF/Dcp"
          },
          {
            "name": "MIME-Version",
            "value": "1.0"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a2e:978d:0:b0:299:a9db:95 with SMTP id y13-20020a2e978d000000b00299a9db0095mr2841423lji.1.1684782319703; Mon, 22 May 2023 12:05:19 -0700 (PDT)"
          },
          {
            "name": "Reply-To",
            "value": "pratik2018id@gmail.com"
          },
          {
            "name": "Sender",
            "value": "Google Calendar <calendar-notification@google.com>"
          },
          {
            "name": "Auto-Submitted",
            "value": "auto-generated"
          },
          {
            "name": "Message-ID",
            "value": "<calendar-8b65d8b1-cbd2-450e-b707-98242d43afdd@google.com>"
          },
          {
            "name": "Date",
            "value": "Mon, 22 May 2023 19:05:19 +0000"
          },
          {
            "name": "Subject",
            "value": "pratik2018id@gmail.com would like to view your calendar"
          },
          {
            "name": "From",
            "value": "pratik2018id@gmail.com"
          },
          {
            "name": "To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Content-Type",
            "value": "multipart/alternative; boundary=\"000000000000b09f7f05fc4cf32d\""
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "text/plain",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/plain; charset=\"UTF-8\"; format=flowed; delsp=yes"
              }
            ],
            "body": {
              "size": 565,
              "data": "SSd2ZSBiZWVuIHVzaW5nIEdvb2dsZSBDYWxlbmRhciB0byBvcmdhbml6ZSBteSBzY2hlZHVsZSwgZmluZCBpbnRlcmVzdGluZyAgDQpldmVudHMsIGFuZCBzaGFyZSBteSBzY2hlZHVsZSB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseSBtZW1iZXJzLiBJJ2QgbGlrZSB0byAgDQpiZSBhYmxlIHRvIHZpZXcgeW91ciBjYWxlbmRhciB0byBtYWtlIHNjaGVkdWxpbmcgdGhpbmdzIHRvZ2V0aGVyIGV2ZW4gIA0KZWFzaWVyLg0KDQpwcmF0aWsyMDE4aWRAZ21haWwuY29tIHdvdWxkIGxpa2UgdG8gdmlldyB5b3VyIGNhbGVuZGFyLg0KDQoNClRvIGFjY2VwdCB0aGlzIHJlcXVlc3QsIHBsZWFzZSB2aXNpdDoNCg0KW2h0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9yZW5kZXI_c2hhcmU9cHJhdGlrMjAxOGlkJTQwZ21haWwuY29tJmN0b2s9Y0hKaGRHbHJMblJwZDJGeWFVQnpaV04xY214NUxtTnZiUV0NCg0KVGhhbmtzLA0KDQotIFRoZSBHb29nbGUgQ2FsZW5kYXIgVGVhbQ0KDQoNClZpZXcgeW91ciBjYWxlbmRhciBhdCBodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXINCg=="
            }
          },
          {
            "partId": "1",
            "mimeType": "text/html",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/html; charset=\"UTF-8\""
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "quoted-printable"
              }
            ],
            "body": {
              "size": 773,
              "data": "SSYjMzk7dmUgYmVlbiB1c2luZyBHb29nbGUgQ2FsZW5kYXIgdG8gb3JnYW5pemUgbXkgc2NoZWR1bGUsIGZpbmQgaW50ZXJlc3RpbmcgZXZlbnRzLCBhbmQgc2hhcmUgbXkgc2NoZWR1bGUgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHkgbWVtYmVycy4gSSYjMzk7ZCBsaWtlIHRvIGJlIGFibGUgdG8gdmlldyB5b3VyIGNhbGVuZGFyIHRvIG1ha2Ugc2NoZWR1bGluZyB0aGluZ3MgdG9nZXRoZXIgZXZlbiBlYXNpZXIuIDxkaXYgc3R5bGU9ImJvcmRlci10b3A6MXB4IHNvbGlkICMwMDA7IG1hcmdpbi10b3A6MnB4OyI-PC9kaXY-IHByYXRpazIwMThpZEBnbWFpbC5jb20gd291bGQgbGlrZSB0byB2aWV3IHlvdXIgY2FsZW5kYXIuPGJyPjxicj4gVG8gYWNjZXB0IHRoaXMgcmVxdWVzdCwgcGxlYXNlIHZpc2l0Ojxicj4gPGEgaHJlZj0iaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL3JlbmRlcj9zaGFyZT1wcmF0aWsyMDE4aWQlNDBnbWFpbC5jb20mY3Rvaz1jSEpoZEdsckxuUnBkMkZ5YVVCelpXTjFjbXg1TG1OdmJRIj5odHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvcmVuZGVyP3NoYXJlPXByYXRpazIwMThpZCU0MGdtYWlsLmNvbSZjdG9rPWNISmhkR2xyTG5ScGQyRnlhVUJ6WldOMWNteDVMbU52YlE8L2E-PGJyPjxicj4gVGhhbmtzLDxicj4gLSBUaGUgR29vZ2xlIENhbGVuZGFyIFRlYW08YnI-PGJyPiA8YSBocmVmPSJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIiPlZpZXcgeW91ciBjYWxlbmRhcjwvYT4="
            }
          }
        ]
      },
      "sizeEstimate": 8016,
      "historyId": "60134",
      "internalDate": "1684782319000"
    },
    {
      "id": "18844d96de8162f8",
      "threadId": "18844d96de8162f8",
      "labelIds": [
        "IMPORTANT",
        "CATEGORY_UPDATES",
        "INBOX"
      ],
      "snippet": "hi pato1212.pt@gmail.com would like to view your calendar. To accept this request, please visit: https://calendar.google.com/calendar/render?share=pato1212.pt%40gmail.com&amp;ctok=",
      "payload": {
        "partId": "",
        "mimeType": "multipart/alternative",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:774c:0:0:0:0:0 with SMTP id d12csp1560035ocu;        Mon, 22 May 2023 12:04:40 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a2e:a312:0:b0:2b0:3343:1c0a with SMTP id l18-20020a2ea312000000b002b033431c0amr102733lje.31.1684782280068;        Mon, 22 May 2023 12:04:40 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684782280; cv=none;        d=google.com; s=arc-20160816;        b=NPtyZn6+Xqp/CorUK2PM+NjN3L81xgxz9ZD/E1TnFNkgb68aeytUe+ITe3DIfnbTX9         ZMccGPBrgUiWPQWoKzjSrtIUwEqrnCEG3kxLAHRNSkpz6mcDqa4P8/DrDOYOVWW8YiBc         5A6L2uJy12jO90nTH8nq7Xi8HIgvGTXsnM63pDdjs5+Ph/4eaxCc0Nxec4lvJD4sOO/s         zsVFR38JhmMwRlV6GSszz/2vyyjxXrtlazju4OnFGrx0US/fNbQgVQJK/nYbUVS/Xl1y         H4A85QmGok7BATTHLg4mwOYfrEyWMe9fdp+EVWAY0A/513FUZlFtvvCOheaUJH2MMkfI         Dwwg=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:dkim-signature:dkim-signature;        bh=0yEye4ooF/gNkwFVAxbD54UKjUFUhDQdH6a2i/ZGVNU=;        b=YElm8yJYYRqbA2/3UYG2ZgOFSz5+BsiNo/JcJ6iT4cTqN5bTgeFywrPp8A6hgZTNYm         PLTpukOouipJ6nSEOuifxUZOSj4j2sh04px08MczJEEPLxO8uKDPqDR6TEbG5Xua3fcj         uLrK672aQX/BMyQQ10a8bfmISkwrwKtHwvaeieitfl4tituwQl7/4zZeAzCMxVjUZwQV         UiGwI5jCJkNCfryEVsJ2CxH28ge/5bYjxVxUZkhifuDgUw0nDVjzewczGkuybLGvl7hU         GrxWIyiLPawfDTgOGzrWX/EQKChGzJAGTxuOlXnph6AsVhsqvFDVQd3yqU5Uqg0kzqzz         ap1A=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@google.com header.s=20221208 header.b=MbzoPrW3;       dkim=pass header.i=@gmail.com header.s=20221208 header.b=PMnKTBLC;       spf=pass (google.com: domain of 3x7xrzasjdrof0jersrs.fj6c08b.2ecfh0j8a.j8m0h8i42khbo.2ec@calendar-server.bounces.google.com designates 209.85.220.73 as permitted sender) smtp.mailfrom=3x7xrZAsJDRoF0JERSRS.FJ6C08B.2ECFH0J8A.J8M0H8I42KHBO.2EC@calendar-server.bounces.google.com;       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com"
          },
          {
            "name": "Return-Path",
            "value": "<3x7xrZAsJDRoF0JERSRS.FJ6C08B.2ECFH0J8A.J8M0H8I42KHBO.2EC@calendar-server.bounces.google.com>"
          },
          {
            "name": "Received",
            "value": "from mail-sor-f73.google.com (mail-sor-f73.google.com. [209.85.220.73])        by mx.google.com with SMTPS id y2-20020a05651c106200b002ad981aeb90sor1436663ljm.2.2023.05.22.12.04.39        for <pratik.tiwari@securly.com>        (Google Transport Security);        Mon, 22 May 2023 12:04:40 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of 3x7xrzasjdrof0jersrs.fj6c08b.2ecfh0j8a.j8m0h8i42khbo.2ec@calendar-server.bounces.google.com designates 209.85.220.73 as permitted sender) client-ip=209.85.220.73;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@google.com header.s=20221208 header.b=MbzoPrW3;       dkim=pass header.i=@gmail.com header.s=20221208 header.b=PMnKTBLC;       spf=pass (google.com: domain of 3x7xrzasjdrof0jersrs.fj6c08b.2ecfh0j8a.j8m0h8i42khbo.2ec@calendar-server.bounces.google.com designates 209.85.220.73 as permitted sender) smtp.mailfrom=3x7xrZAsJDRoF0JERSRS.FJ6C08B.2ECFH0J8A.J8M0H8I42KHBO.2EC@calendar-server.bounces.google.com;       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=google.com; s=20221208; t=1684782279; x=1687374279;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:from:to:cc:subject:date:message-id:reply-to;        bh=0yEye4ooF/gNkwFVAxbD54UKjUFUhDQdH6a2i/ZGVNU=;        b=MbzoPrW3U4ekBv3bIDdegDTTGsjbjOkBORQvDzA5NeJ96z27+8jR+upfewcVG++qoI         3rX1i1ZJSqbKHRaQwXNFczOAidmfrEkx6KV0y26FBRk5HKHNaPS9fW0moRZQn6N11myH         ueYzrepvvJS5ZzmxwB4H+IRCHKyveiYPutMDXinBUhYWCTv7pX9vmBeaRq7pclb7GPGk         DFzCbXtKHa7flQSsEYHW67ro60zokmpRl4GlwQBhCdXCTi99sE3Vxtg3Avg/Rg67vU+W         eBp33nFFOB3RIfpPaUFScy6R+YdfQqN/MGpk5Ed0pqjiiLamADnGrq0IcdcYOgY6ygC1         W1vg=="
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20221208; t=1684782279; x=1687374279;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:from:to:cc:subject:date:message-id:reply-to;        bh=0yEye4ooF/gNkwFVAxbD54UKjUFUhDQdH6a2i/ZGVNU=;        b=PMnKTBLCCPGOLMYvn0p02pJpqRwRMXAfRiSW7MPZzfYrACRzIcsELeVFwaMIaQlDPt         vDZIMSjF9jb0K+3IQyOyj5LzoNu6Zbfzcl/hCppfb+m/duG/b4Cuk/37GXQLpmAgF8CB         ZOMv20U7FOt0fFuEeczDEi0dKJNOGGVm00Zfdp2V+6WZnBPjkZAFs+OkcAnFsTsJstq2         94kR8OpfX31yuvc8fogN+cDvePF8CkStbkteR5FKcsKLp9eAzD21TEs/fjwML1iPdqKx         hys5tZK1Rp8RJX+8TFzcAcCkNMwW8U52F+F04jFZaFGIhEXV9uWTdUUMqBV4awVjy1s+         6ozg=="
          },
          {
            "name": "X-Google-DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20221208; t=1684782279; x=1687374279;        h=to:from:subject:date:message-id:auto-submitted:sender:reply-to         :mime-version:x-gm-message-state:from:to:cc:subject:date:message-id         :reply-to;        bh=0yEye4ooF/gNkwFVAxbD54UKjUFUhDQdH6a2i/ZGVNU=;        b=Gt//O4aEJbLpq/u3xZTrE9OH+miRbZl1cBbpMU/PdhU+wkEWjzHznytAy1fMAvBNwk         RS8a6ML6nZpVzcJJTVh/2Zjgg+fU4ze9nbrnHKzUfExnHryrJlfCV5DQZX7GOLvI/6jq         a2dvLgDGUwCJnOnRL/yI/25YJh7eVYtO/HrLVc+iQ5n3KtdpdMFYvS96y1zXg/t23mJt         3lENZrePFpotmdLb6Cvg2B5iyNmrcpNGnOoNr+4AuqeOjlwNk1ENZVpaxZ80oi9bilxZ         VhWo49vKV4nJdblyHhun4j7e7T8Dle6SUzTaZs3GIs9GeShwRb/jT4fyveV02kKHixPX         GiQA=="
          },
          {
            "name": "X-Gm-Message-State",
            "value": "AC+VfDxVBEbF7Ogf0QBUe08H/a5fCXZ+S//smKJHVNVN4YO083Az70Lp Uew//CSVQ3PZyxUSo3xoPJQn5zN1Api+stg1QjRKGjg="
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ4pYQIKkZlUDkcXM94QpgMKfvxH275tc8Q+ci32KJp4Wb53IJFi4mger06LQLgBy0gFVRfwyXmWrCOpKCsRM9f7"
          },
          {
            "name": "MIME-Version",
            "value": "1.0"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a2e:7019:0:b0:2ac:74c8:8c8a with SMTP id l25-20020a2e7019000000b002ac74c88c8amr3065825ljc.3.1684782279620; Mon, 22 May 2023 12:04:39 -0700 (PDT)"
          },
          {
            "name": "Reply-To",
            "value": "pato1212.pt@gmail.com"
          },
          {
            "name": "Sender",
            "value": "Google Calendar <calendar-notification@google.com>"
          },
          {
            "name": "Auto-Submitted",
            "value": "auto-generated"
          },
          {
            "name": "Message-ID",
            "value": "<calendar-f188449d-611c-4e83-b82c-2f802d15c849@google.com>"
          },
          {
            "name": "Date",
            "value": "Mon, 22 May 2023 19:04:39 +0000"
          },
          {
            "name": "Subject",
            "value": "pato1212.pt@gmail.com would like to view your calendar"
          },
          {
            "name": "From",
            "value": "pato1212.pt@gmail.com"
          },
          {
            "name": "To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Content-Type",
            "value": "multipart/alternative; boundary=\"0000000000004d011f05fc4cf16b\""
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "text/plain",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/plain; charset=\"UTF-8\"; format=flowed; delsp=yes"
              }
            ],
            "body": {
              "size": 330,
              "data": "aGkNCg0KcGF0bzEyMTIucHRAZ21haWwuY29tIHdvdWxkIGxpa2UgdG8gdmlldyB5b3VyIGNhbGVuZGFyLg0KDQoNClRvIGFjY2VwdCB0aGlzIHJlcXVlc3QsIHBsZWFzZSB2aXNpdDoNCg0KW2h0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9yZW5kZXI_c2hhcmU9cGF0bzEyMTIucHQlNDBnbWFpbC5jb20mY3Rvaz1jSEpoZEdsckxuUnBkMkZ5YVVCelpXTjFjbXg1TG1OdmJRXQ0KDQpUaGFua3MsDQoNCi0gVGhlIEdvb2dsZSBDYWxlbmRhciBUZWFtDQoNCg0KVmlldyB5b3VyIGNhbGVuZGFyIGF0IGh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhcg0K"
            }
          },
          {
            "partId": "1",
            "mimeType": "text/html",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "text/html; charset=\"UTF-8\""
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "quoted-printable"
              }
            ],
            "body": {
              "size": 538,
              "data": "aGkgPGRpdiBzdHlsZT0iYm9yZGVyLXRvcDoxcHggc29saWQgIzAwMDsgbWFyZ2luLXRvcDoycHg7Ij48L2Rpdj4gcGF0bzEyMTIucHRAZ21haWwuY29tIHdvdWxkIGxpa2UgdG8gdmlldyB5b3VyIGNhbGVuZGFyLjxicj48YnI-IFRvIGFjY2VwdCB0aGlzIHJlcXVlc3QsIHBsZWFzZSB2aXNpdDo8YnI-IDxhIGhyZWY9Imh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9yZW5kZXI_c2hhcmU9cGF0bzEyMTIucHQlNDBnbWFpbC5jb20mY3Rvaz1jSEpoZEdsckxuUnBkMkZ5YVVCelpXTjFjbXg1TG1OdmJRIj5odHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvcmVuZGVyP3NoYXJlPXBhdG8xMjEyLnB0JTQwZ21haWwuY29tJmN0b2s9Y0hKaGRHbHJMblJwZDJGeWFVQnpaV04xY214NUxtTnZiUTwvYT48YnI-PGJyPiBUaGFua3MsPGJyPiAtIFRoZSBHb29nbGUgQ2FsZW5kYXIgVGVhbTxicj48YnI-IDxhIGhyZWY9Imh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhciI-VmlldyB5b3VyIGNhbGVuZGFyPC9hPg=="
            }
          }
        ]
      },
      "sizeEstimate": 7529,
      "historyId": "59853",
      "internalDate": "1684782279000"
    },
    {
      "id": "18844d6ef05abe5e",
      "threadId": "18844d6ef05abe5e",
      "labelIds": [
        "IMPORTANT",
        "CATEGORY_PERSONAL",
        "INBOX"
      ],
      "snippet": "Hey Pratik, I hope this email finds you well. I am reaching out to express my interest in a full-time position at Securly as a Frontend developer. Having recently graduated, I am eager to contribute my",
      "payload": {
        "partId": "",
        "mimeType": "multipart/mixed",
        "filename": "",
        "headers": [
          {
            "name": "Delivered-To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Received",
            "value": "by 2002:ac9:774c:0:0:0:0:0 with SMTP id d12csp1558306ocu;        Mon, 22 May 2023 12:01:57 -0700 (PDT)"
          },
          {
            "name": "X-Received",
            "value": "by 2002:a17:903:185:b0:1af:b682:7a78 with SMTP id z5-20020a170903018500b001afb6827a78mr4557613plg.52.1684782116471;        Mon, 22 May 2023 12:01:56 -0700 (PDT)"
          },
          {
            "name": "ARC-Seal",
            "value": "i=1; a=rsa-sha256; t=1684782116; cv=none;        d=google.com; s=arc-20160816;        b=YAzT2tX0Li9K7irZtmgdUOWKhxwkck2uaCknzdui+GkbjyzksqydWS//0T/QCvTcTn         BS7TLfFyPhvWiQ2GGmatGye7wgVHEh/wlJizphIy4e5icV9lCESecng2KWBTayQ6c8cC         OoinUEaB8iXiFL8ipPXLjVSRxZU5/xWGHNkgO3xw1fXk3t0wio2M2uFOaV485sSPnaKj         m89nTb6Kl92Ayn3hmenRCffJveE7dpVxqaFZUKPWZahxfjL59VpEbPXiQkFQpi35JuXz         A17KezLg5E4uBlD+1DHV96G3uQsM77UYlxOV+3NJy+4gpp2vBY/g+ywK1PeCF/covCGb         tAfg=="
          },
          {
            "name": "ARC-Message-Signature",
            "value": "i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;        h=to:subject:message-id:date:from:mime-version:dkim-signature;        bh=2DyjwUDp67P5hc23l2ItHCwWSYdmpYvQ5vlzgGxRIrA=;        b=vS4NFIpgaTxJnZ/tGeZIKGT+H0fO3mFK6LtFEwBwX0SBnubh570LQhPHsvRM31rU9V         WGhEgQCZuXokB8FNq0Yjq1AFVw6Vetjhzhw8ChM4Lzuy1HOKImwA1kt2VLTzE5JUqig4         6xAtyR5l/qjMgOLBdLnsi4bsimsb36PbefOLtlbO3Tq9VMcrV75PjP9GcHaFplDJuTCa         CmcMgSlH3T6umezMQKpYXnH5uc10fUCxNZrIT7FVNou573HDiwAdzWwlfYUOsLdC5gbK         9gujbrPEITuqjz1Ym+yKqLQHEJV0LTUFGY0nM3Kid0z5PQiCS7nwTFzltbliUcWMjhwW         npdg=="
          },
          {
            "name": "ARC-Authentication-Results",
            "value": "i=1; mx.google.com;       dkim=pass header.i=@gmail.com header.s=20221208 header.b=\"GLJxdw/L\";       spf=pass (google.com: domain of agarwalshubhra2002@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=agarwalshubhra2002@gmail.com;       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com"
          },
          {
            "name": "Return-Path",
            "value": "<agarwalshubhra2002@gmail.com>"
          },
          {
            "name": "Received",
            "value": "from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])        by mx.google.com with SMTPS id w10-20020a170903310a00b001ac896ff658sor2595019plc.13.2023.05.22.12.01.56        for <pratik.tiwari@securly.com>        (Google Transport Security);        Mon, 22 May 2023 12:01:56 -0700 (PDT)"
          },
          {
            "name": "Received-SPF",
            "value": "pass (google.com: domain of agarwalshubhra2002@gmail.com designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41;"
          },
          {
            "name": "Authentication-Results",
            "value": "mx.google.com;       dkim=pass header.i=@gmail.com header.s=20221208 header.b=\"GLJxdw/L\";       spf=pass (google.com: domain of agarwalshubhra2002@gmail.com designates 209.85.220.41 as permitted sender) smtp.mailfrom=agarwalshubhra2002@gmail.com;       dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com"
          },
          {
            "name": "DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=gmail.com; s=20221208; t=1684782116; x=1687374116;        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject         :date:message-id:reply-to;        bh=2DyjwUDp67P5hc23l2ItHCwWSYdmpYvQ5vlzgGxRIrA=;        b=GLJxdw/Llrn0TFV1VDdKeerButdfhuMuYnDwqDb9qmLuTTMPSDjg1cjn/ZHzxWf3mm         eusvlEikafNIGPxWJKHEThJlqwtdp9Hj1VZN7q4DvT4AjuGjXFJ2VQp4YKnC8a/Z5VF1         FRzSd6mr7ioUuUh707/9E9ZmjCI3XTKdxbNMXBYWX/9zlrVysD/hakwPQfSQL9jtfmWu         5XEc+/KnzRKlqsbJ5mFtx72WnrSshpyYJ0fUZt4NiXVUjSL0ybkM+t3wR56KWGf6dbIT         SjB6+bfE8BBKDcOqrwK2UCunFLdBRZJyOxwfys0we7kSbYwzOuDT3fE+01TQtqUeQWA3         YObQ=="
          },
          {
            "name": "X-Google-DKIM-Signature",
            "value": "v=1; a=rsa-sha256; c=relaxed/relaxed;        d=1e100.net; s=20221208; t=1684782116; x=1687374116;        h=to:subject:message-id:date:from:mime-version:x-gm-message-state         :from:to:cc:subject:date:message-id:reply-to;        bh=2DyjwUDp67P5hc23l2ItHCwWSYdmpYvQ5vlzgGxRIrA=;        b=dLY1QO4CvJxpzBej5do9l8iD9LoV7oYZGpoHcVraPJmmum7z652ZYcDKMd+G3awNEv         ZsTbY4U5s0EBa17b5mcCEe7iSVMMAzNSpBDu+TiVX1X1yFJXIq1kYFrSNN7raf0YJ04R         Jco3ahKwigqMxJoMjPYZg8fDKU0oLn4kCcUFdO1aI08/i6e4GAIh6nS9A7w7LhwVu5hj         1GC9dFv3Uar/GqO33WdZAB6eIuWaiYrSJRzg8Kkh4EiShMAvFP3dudYPJj1qU+S+sSmJ         lBApvvoGwKPqPez05E21nPo/FPX+o8IcEB5IsCvXxo+gbs6bvgOy58eJM8J5lyrfOGaD         hWsA=="
          },
          {
            "name": "X-Gm-Message-State",
            "value": "AC+VfDwsqYFAB/T2BkopNcaTjHMovcme7Rc9NwkN57BnZioaXIZ2cQu9 AsPjhqG0ADMNUZU982jYRarNiOID9IZU66C61BUl1dakSXs="
          },
          {
            "name": "X-Google-Smtp-Source",
            "value": "ACHHUZ6+IGtl8Hn2gaAxb7y+ISYdlfVbgVP/B7EjBVKJqATTJ9UYFuIraPHq/COXjeKNqNgJCMuU5gwm+ZXVgnPYJ5Q="
          },
          {
            "name": "X-Received",
            "value": "by 2002:a17:90a:6444:b0:255:99bc:9310 with SMTP id y4-20020a17090a644400b0025599bc9310mr671205pjm.3.1684782115278; Mon, 22 May 2023 12:01:55 -0700 (PDT)"
          },
          {
            "name": "MIME-Version",
            "value": "1.0"
          },
          {
            "name": "From",
            "value": "Shubhra Agarwal <agarwalshubhra2002@gmail.com>"
          },
          {
            "name": "Date",
            "value": "Tue, 23 May 2023 00:31:18 +0530"
          },
          {
            "name": "Message-ID",
            "value": "<CAN-PB-Amq4Z5mh83ukq1XaK6ZR-u0iDyZXaLHwx0w2qd0R0RFg@mail.gmail.com>"
          },
          {
            "name": "Subject",
            "value": "Frontend Engineer for hire"
          },
          {
            "name": "To",
            "value": "pratik.tiwari@securly.com"
          },
          {
            "name": "Content-Type",
            "value": "multipart/mixed; boundary=\"00000000000081769705fc4ce78c\""
          }
        ],
        "body": {
          "size": 0
        },
        "parts": [
          {
            "partId": "0",
            "mimeType": "multipart/alternative",
            "filename": "",
            "headers": [
              {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"00000000000081769205fc4ce78a\""
              }
            ],
            "body": {
              "size": 0
            },
            "parts": [
              {
                "partId": "0.0",
                "mimeType": "text/plain",
                "filename": "",
                "headers": [
                  {
                    "name": "Content-Type",
                    "value": "text/plain; charset=\"UTF-8\""
                  }
                ],
                "body": {
                  "size": 1097,
                  "data": "SGV5IFByYXRpaywNCg0KSSBob3BlIHRoaXMgZW1haWwgZmluZHMgeW91IHdlbGwuIEkgYW0gcmVhY2hpbmcgb3V0IHRvIGV4cHJlc3MgbXkgaW50ZXJlc3QNCmluIGEgZnVsbC10aW1lIHBvc2l0aW9uIGF0IFNlY3VybHkgYXMgYSBGcm9udGVuZCBkZXZlbG9wZXIuIEhhdmluZyByZWNlbnRseQ0KZ3JhZHVhdGVkLCBJIGFtIGVhZ2VyIHRvIGNvbnRyaWJ1dGUgbXkgc2tpbGxzIGFuZCBleHBlcnRpc2UgdG8geW91cg0KZXN0ZWVtZWQgb3JnYW5pemF0aW9uLiBXaXRoIG92ZXIgdHdvIHllYXJzIG9mIGV4cGVyaWVuY2UgYXMgYm90aCBhbiBpbnRlcm4NCmFuZCBhIGZyZWVsYW5jZXIsIEkgYmVsaWV2ZSBJIHBvc3Nlc3MgdGhlIG5lY2Vzc2FyeSBxdWFsaWZpY2F0aW9ucyB0byBleGNlbA0KaW4gdGhpcyByb2xlLg0KDQpNeSBwYXNzaW9uIGZvciBzdHJlYW1pbmcgdGVjaG5vbG9naWVzIGFuZCBkZXNpcmUgdG8gYmUgYSBwYXJ0IG9mIHRoZQ0KZHluYW1pYyB0ZWFtIGF0IFNlY3VybHkgaGF2ZSBkcml2ZW4gbWUgdG8gcHVyc3VlIHRoaXMgb3Bwb3J0dW5pdHkuIEkgYW0NCmNvbmZpZGVudCB0aGF0IG15IGRlZGljYXRpb24gYW5kIGFiaWxpdGllcyB3aWxsIGVuYWJsZSBtZSB0byBjb250cmlidXRlIHRvDQp0aGUgY29tcGFueSdzIHN1Y2Nlc3MgYW5kIGhlbHAgaW4gYnJlYWtpbmcgbmV3IHJlY29yZHMuDQoNCkZvciB5b3VyIHJlZmVyZW5jZSwgSSBoYXZlIGluY2x1ZGVkIGEgbGluayB0byBteSBwb3J0Zm9saW86DQpodHRwczovL3NodWJocmFhZ2Fyd2FsLmNvbS4gRnVydGhlcm1vcmUsIEkgaGF2ZSBhdHRhY2hlZCBteSByZXN1bWUgZm9yIHlvdXINCnBlcnVzYWwuDQoNClRoYW5rIHlvdSBmb3IgY29uc2lkZXJpbmcgbXkgYXBwbGljYXRpb24uIEkgYW0gZXhjaXRlZCBhYm91dCB0aGUNCnBvc3NpYmlsaXR5IG9mIGpvaW5pbmcgU2VjdXJseSBhbmQgY29udHJpYnV0aW5nIHRvIGl0cyBjb250aW51ZWQgZ3Jvd3RoIGFuZA0Kc3VjY2Vzcy4gSSBsb29rIGZvcndhcmQgdG8gdGhlIG9wcG9ydHVuaXR5IHRvIGRpc2N1c3MgbXkgcXVhbGlmaWNhdGlvbnMNCmZ1cnRoZXIuDQoNCktpbmQgcmVnYXJkcywNCg0KU2h1YmhyYSBBZ2Fyd2FsDQo="
                }
              },
              {
                "partId": "0.1",
                "mimeType": "text/html",
                "filename": "",
                "headers": [
                  {
                    "name": "Content-Type",
                    "value": "text/html; charset=\"UTF-8\""
                  },
                  {
                    "name": "Content-Transfer-Encoding",
                    "value": "quoted-printable"
                  }
                ],
                "body": {
                  "size": 1214,
                  "data": "PGRpdiBkaXI9Imx0ciI-SGV5IFByYXRpayw8ZGl2Pjxicj48L2Rpdj48ZGl2PkkgaG9wZSB0aGlzIGVtYWlsIGZpbmRzIHlvdSB3ZWxsLiBJIGFtIHJlYWNoaW5nIG91dCB0byBleHByZXNzIG15IGludGVyZXN0IGluIGEgZnVsbC10aW1lIHBvc2l0aW9uIGF0IFNlY3VybHkgYXMgYSBGcm9udGVuZCBkZXZlbG9wZXIuIEhhdmluZyByZWNlbnRseSBncmFkdWF0ZWQsIEkgYW0gZWFnZXIgdG8gY29udHJpYnV0ZSBteSBza2lsbHMgYW5kIGV4cGVydGlzZSB0byB5b3VyIGVzdGVlbWVkIG9yZ2FuaXphdGlvbi4gV2l0aCBvdmVyIHR3byB5ZWFycyBvZiBleHBlcmllbmNlIGFzIGJvdGggYW4gaW50ZXJuIGFuZCBhIGZyZWVsYW5jZXIsIEkgYmVsaWV2ZSBJIHBvc3Nlc3MgdGhlIG5lY2Vzc2FyeSBxdWFsaWZpY2F0aW9ucyB0byBleGNlbCBpbiB0aGlzIHJvbGUuPGJyPjxicj5NeSBwYXNzaW9uIGZvciBzdHJlYW1pbmcgdGVjaG5vbG9naWVzIGFuZCBkZXNpcmUgdG8gYmUgYSBwYXJ0IG9mIHRoZSBkeW5hbWljIHRlYW0gYXQgU2VjdXJseSBoYXZlIGRyaXZlbiBtZSB0byBwdXJzdWUgdGhpcyBvcHBvcnR1bml0eS4gSSBhbSBjb25maWRlbnQgdGhhdCBteSBkZWRpY2F0aW9uIGFuZCBhYmlsaXRpZXMgd2lsbCBlbmFibGUgbWUgdG8gY29udHJpYnV0ZSB0byB0aGUgY29tcGFueSYjMzk7cyBzdWNjZXNzIGFuZCBoZWxwIGluIGJyZWFraW5nIG5ldyByZWNvcmRzLjxicj48YnI-Rm9yIHlvdXIgcmVmZXJlbmNlLCBJIGhhdmUgaW5jbHVkZWQgYSBsaW5rIHRvIG15IHBvcnRmb2xpbzrCoDxhIGhyZWY9Imh0dHBzOi8vc2h1YmhyYWFnYXJ3YWwuY29tLyIgdGFyZ2V0PSJfYmxhbmsiPmh0dHBzOi8vc2h1YmhyYWFnYXJ3YWwuY29tPC9hPi4gRnVydGhlcm1vcmUsIEkgaGF2ZSBhdHRhY2hlZCBteSByZXN1bWUgZm9yIHlvdXIgcGVydXNhbC48YnI-PGJyPlRoYW5rIHlvdSBmb3IgY29uc2lkZXJpbmcgbXkgYXBwbGljYXRpb24uIEkgYW0gZXhjaXRlZCBhYm91dCB0aGUgcG9zc2liaWxpdHkgb2Ygam9pbmluZyBTZWN1cmx5IGFuZCBjb250cmlidXRpbmcgdG8gaXRzIGNvbnRpbnVlZCBncm93dGggYW5kIHN1Y2Nlc3MuIEkgbG9vayBmb3J3YXJkIHRvIHRoZSBvcHBvcnR1bml0eSB0byBkaXNjdXNzIG15IHF1YWxpZmljYXRpb25zIGZ1cnRoZXIuPGJyPjxicj5LaW5kIHJlZ2FyZHMsPGJyPjxicj5TaHViaHJhIEFnYXJ3YWw8YnI-PC9kaXY-PC9kaXY-DQo="
                }
              }
            ]
          },
          {
            "partId": "1",
            "mimeType": "application/pdf",
            "filename": "Resume_Shubhra.pdf",
            "headers": [
              {
                "name": "Content-Type",
                "value": "application/pdf; name=\"Resume_Shubhra.pdf\""
              },
              {
                "name": "Content-Disposition",
                "value": "attachment; filename=\"Resume_Shubhra.pdf\""
              },
              {
                "name": "Content-Transfer-Encoding",
                "value": "base64"
              },
              {
                "name": "Content-ID",
                "value": "<f_lhz7qru00>"
              },
              {
                "name": "X-Attachment-Id",
                "value": "f_lhz7qru00"
              }
            ],
            "body": {
              "attachmentId": "ANGjdJ-MWTt6f-hBvA7AnHQa67WrjJJ1TcO9rLWBeDG3Tlkn-uRt0RR4wECPDIwYUVDMMNTafBqAfNOIYOY4QDA44-DH73dHKl92-F8p3Ukoq-uzYa4zcsI_2p15ADxMa1RiiSkUUU9MOu0Odh3DRISmLf90HmX4tw5FKwhboFYyKjgpqoFIvOyVc3wZ4cgN6i8pGjEBAJ3DEkuO-tN2cqqTuUy_bZ4hCqdYKXMC8M80DXuEIyujgcXBjNGT2Fe3eJu28tqoYXfRpKtAVPuFuk1r127FEB-N6pyvuiDBjHKxnsP2uiYU1RuhLsV-a9UL3Dd-tweN--AnOLrC1Ez-Ul8lKXqllvo7YabK_gG3EbQBWEPZu7r6OuzfV4GgZRfTZ2xA_qSQNMR0mxdQnIey",
              "size": 49356
            }
          }
        ]
      },
      "sizeEstimate": 75400,
      "historyId": "59850",
      "internalDate": "1684782078000"
    }
  ],
  "events": {
    "kind": "calendar#events",
    "etag": "\"p32ca37fmma5vu0g\"",
    "summary": "pratik.tiwari@securly.com",
    "updated": "2023-05-23T12:04:00.591Z",
    "timeZone": "Asia/Kolkata",
    "accessRole": "owner",
    "defaultReminders": [
      {
        "method": "popup",
        "minutes": 10
      }
    ],
    "nextPageToken": "EjYKKzJrM3BwOGZvZmhsNHZoOXZvaTk4cGw5cnV0XzIwMjMwNTMxVDA1MDAwMFoYgPS26qyf_wIiBwgFEKTqgzM=",
    "items": [
      {
        "kind": "calendar#event",
        "etag": "\"3363432431538000\"",
        "id": "2k3pp8fofhl4vh9voi98pl9rut_20230524T050000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MmszcHA4Zm9maGw0dmg5dm9pOThwbDlydXRfMjAyMzA1MjRUMDUwMDAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2023-03-20T04:59:52.000Z",
        "updated": "2023-04-17T07:23:35.769Z",
        "summary": "daily scrum",
        "creator": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "organizer": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "start": {
          "dateTime": "2023-05-24T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-24T10:45:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000",
        "originalStartTime": {
          "dateTime": "2023-05-24T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000@google.com",
        "sequence": 1,
        "attendees": [
          {
            "email": "shreyas@securly.com",
            "displayName": "Shreyas Moghe",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "gaurav@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "amit.shirke@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish.temurnikar@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "bikash.singh@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "sagar.satpute@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "riddhish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "pravin@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "accepted"
          }
        ],
        "hangoutLink": "https://meet.google.com/xig-suji-dpt",
        "conferenceData": {
          "entryPoints": [
            {
              "entryPointType": "video",
              "uri": "https://meet.google.com/xig-suji-dpt",
              "label": "meet.google.com/xig-suji-dpt"
            },
            {
              "entryPointType": "more",
              "uri": "https://tel.meet/xig-suji-dpt?pin=1189638423295",
              "pin": "1189638423295"
            },
            {
              "regionCode": "US",
              "entryPointType": "phone",
              "uri": "tel:+1-402-284-0095",
              "label": "+1 402-284-0095",
              "pin": "314288338"
            }
          ],
          "conferenceSolution": {
            "key": {
              "type": "hangoutsMeet"
            },
            "name": "Google Meet",
            "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
          },
          "conferenceId": "xig-suji-dpt"
        },
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3369686881182000\"",
        "id": "35lqfd309dinf4pgg42fr18afk_20230524T053000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MzVscWZkMzA5ZGluZjRwZ2c0MmZyMThhZmtfMjAyMzA1MjRUMDUzMDAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2019-04-01T15:42:56.000Z",
        "updated": "2023-05-23T12:04:00.591Z",
        "summary": "Pune All-hands",
        "description": "Agenda:<br><ul><li>Bi-weekly general company updates&nbsp;</li><li>10min Q&amp;A session</li></ul><br><br>https://securly.zoom.us/my/alpanat?pwd=TzJQdjVYUHNFb0tTNHJSaFdMRFdtUT09<br><br>Name : alpanat<br>Meeting ID:&nbsp;<a id=\"ow5608\" __is_owner=\"true\">492 665 0058</a><br>Passcode: 123456",
        "location": "https://securly.zoom.us/my/alpanat?pwd=TzJQdjVYUHNFb0tTNHJSaFdMRFdtUT09",
        "creator": {
          "email": "neeraj@securly.com",
          "displayName": "Neeraj Thakar"
        },
        "organizer": {
          "email": "alpana@securly.com",
          "displayName": "Alpana"
        },
        "start": {
          "dateTime": "2023-05-24T11:00:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-24T11:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "35lqfd309dinf4pgg42fr18afk_R20220817T053000",
        "originalStartTime": {
          "dateTime": "2023-05-24T11:00:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "35lqfd309dinf4pgg42fr18afk_R20220817T053000@google.com",
        "sequence": 0,
        "attendees": [
          {
            "email": "pune@securly.com",
            "displayName": "Pune Office",
            "responseStatus": "needsAction"
          },
          {
            "email": "neeraj@securly.com",
            "displayName": "Neeraj Thakar",
            "responseStatus": "accepted"
          },
          {
            "email": "harshal.yewale@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "kalyani.pande@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "needsAction"
          }
        ],
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3369666347680000\"",
        "id": "70ojadb1c8omcbb6cgq66b9k6pi66bb1c5j68b9pcgq3ic3665hm8phi6o_20230524T060000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NzBvamFkYjFjOG9tY2JiNmNncTY2YjlrNnBpNjZiYjFjNWo2OGI5cGNncTNpYzM2NjVobThwaGk2b18yMDIzMDUyNFQwNjAwMDBaIHByYXRpay50aXdhcmlAc2VjdXJseS5jb20",
        "created": "2023-05-02T16:23:38.000Z",
        "updated": "2023-05-23T09:12:53.840Z",
        "summary": "Weekly Anniversary celebration meet",
        "creator": {
          "email": "aditya.bhide@securly.com"
        },
        "organizer": {
          "email": "aditya.bhide@securly.com"
        },
        "start": {
          "dateTime": "2023-05-24T11:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-24T11:50:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "70ojadb1c8omcbb6cgq66b9k6pi66bb1c5j68b9pcgq3ic3665hm8phi6o_R20230524T060000",
        "originalStartTime": {
          "dateTime": "2023-05-24T11:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "70ojadb1c8omcbb6cgq66b9k6pi66bb1c5j68b9pcgq3ic3665hm8phi6o_R20230524T060000@google.com",
        "sequence": 1,
        "attendees": [
          {
            "email": "aditya.bhide@securly.com",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "hr_india@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "needsAction"
          },
          {
            "email": "pune@securly.com",
            "displayName": "Pune Office",
            "responseStatus": "needsAction"
          }
        ],
        "extendedProperties": {
          "shared": {
            "meetingId": "82980289691",
            "zmMeetingNum": "82980289691",
            "meetingParams": "{\"topic\":\"Weekly Anniversary celebration meet\",\"type\":3,\"invitees_hash\":\"Nfyod/RHio2MWMxDtAsM7g==\"}"
          }
        },
        "conferenceData": {
          "entryPoints": [
            {
              "entryPointType": "video",
              "uri": "https://securly.zoom.us/j/82980289691",
              "label": "securly.zoom.us/j/82980289691",
              "meetingCode": "82980289691"
            },
            {
              "regionCode": "US",
              "entryPointType": "phone",
              "uri": "tel:+16699006833,,82980289691#",
              "label": "+1 669-900-6833"
            },
            {
              "entryPointType": "more",
              "uri": "https://www.google.com/url?q=https://applications.zoom.us/addon/invitation/detail?meetingUuid%3DoUKsFgT4TkCfKcMlU1YSUA%253D%253D%26signature%3Deee88c163ae51a07402d2fbf3e576249c67437d141a582472db8ae2a50c01a02%26v%3D1&sa=D&source=calendar&usg=AOvVaw1SkQW2SxOPEQgNK_2E87WQ"
            }
          ],
          "conferenceSolution": {
            "key": {
              "type": "addOn"
            },
            "name": "Zoom Meeting",
            "iconUri": "https://lh3.googleusercontent.com/pw/AM-JKLUkiyTEgH-6DiQP85RGtd_BORvAuFnS9katNMgwYQBJUTiDh12qtQxMJFWYH2Dj30hNsNUrr-kzKMl7jX-Qd0FR7JmVSx-Fhruf8xTPPI-wdsMYez6WJE7tz7KmqsORKBEnBTiILtMJXuMvphqKdB9X=s128-no"
          },
          "conferenceId": "82980289691",
          "notes": "Meeting host: <a href=\"mailto:Aditya.Bhide@securly.com\" target=\"_blank\">Aditya.Bhide@securly.com</a><br /><br />Join Zoom Meeting: <br /><a href=\"https://www.google.com/url?q=https://securly.zoom.us/j/82980289691&amp;sa=D&amp;source=calendar&amp;usg=AOvVaw0gNZ-cJNhR9kf0r3Uel5Jr\" target=\"_blank\">https://securly.zoom.us/j/82980289691</a>",
          "parameters": {
            "addOnParameters": {
              "parameters": {
                "scriptId": "1O_9DeEljSH2vrECr8XeFYYRxFFiowFKOivqSDz316BlBcDXrF00BXrkO",
                "realMeetingId": "82980289691",
                "creatorUserId": "ovP7uAlATb2AwmVbB_dr6Q",
                "meetingUuid": "oUKsFgT4TkCfKcMlU1YSUA==",
                "meetingType": "2",
                "originalEventId": "70ojadb1c8omcbb6cgq66b9k6pi66bb1c5j68b9pcgq3ic3665hm8phi6o"
              }
            }
          }
        },
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3358593509792000\"",
        "id": "05i3foumo2fuplh0v21lclo1cp",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MDVpM2ZvdW1vMmZ1cGxoMHYyMWxjbG8xY3AgcHJhdGlrLnRpd2FyaUBzZWN1cmx5LmNvbQ",
        "created": "2023-03-20T06:26:45.000Z",
        "updated": "2023-03-20T07:19:14.896Z",
        "summary": "Pratik Tiwari : 60 Days Review",
        "location": "In office",
        "creator": {
          "email": "sarabjeet.kaur@securly.com"
        },
        "organizer": {
          "email": "sarabjeet.kaur@securly.com"
        },
        "start": {
          "dateTime": "2023-05-24T12:00:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-24T12:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "05i3foumo2fuplh0v21lclo1cp@google.com",
        "sequence": 0,
        "attendees": [
          {
            "email": "aditya.bhide@securly.com",
            "responseStatus": "tentative"
          },
          {
            "email": "sarabjeet.kaur@securly.com",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "shreyas@securly.com",
            "displayName": "Shreyas Moghe",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "accepted"
          }
        ],
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3363432431538000\"",
        "id": "2k3pp8fofhl4vh9voi98pl9rut_20230525T050000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MmszcHA4Zm9maGw0dmg5dm9pOThwbDlydXRfMjAyMzA1MjVUMDUwMDAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2023-03-20T04:59:52.000Z",
        "updated": "2023-04-17T07:23:35.769Z",
        "summary": "daily scrum",
        "creator": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "organizer": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "start": {
          "dateTime": "2023-05-25T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-25T10:45:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000",
        "originalStartTime": {
          "dateTime": "2023-05-25T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000@google.com",
        "sequence": 1,
        "attendees": [
          {
            "email": "shreyas@securly.com",
            "displayName": "Shreyas Moghe",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "gaurav@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "amit.shirke@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish.temurnikar@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "bikash.singh@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "sagar.satpute@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "riddhish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "pravin@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "accepted"
          }
        ],
        "hangoutLink": "https://meet.google.com/xig-suji-dpt",
        "conferenceData": {
          "entryPoints": [
            {
              "entryPointType": "video",
              "uri": "https://meet.google.com/xig-suji-dpt",
              "label": "meet.google.com/xig-suji-dpt"
            },
            {
              "entryPointType": "more",
              "uri": "https://tel.meet/xig-suji-dpt?pin=1189638423295",
              "pin": "1189638423295"
            },
            {
              "regionCode": "US",
              "entryPointType": "phone",
              "uri": "tel:+1-402-284-0095",
              "label": "+1 402-284-0095",
              "pin": "314288338"
            }
          ],
          "conferenceSolution": {
            "key": {
              "type": "hangoutsMeet"
            },
            "name": "Google Meet",
            "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
          },
          "conferenceId": "xig-suji-dpt"
        },
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3363432431538000\"",
        "id": "2k3pp8fofhl4vh9voi98pl9rut_20230526T050000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MmszcHA4Zm9maGw0dmg5dm9pOThwbDlydXRfMjAyMzA1MjZUMDUwMDAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2023-03-20T04:59:52.000Z",
        "updated": "2023-04-17T07:23:35.769Z",
        "summary": "daily scrum",
        "creator": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "organizer": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "start": {
          "dateTime": "2023-05-26T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-26T10:45:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000",
        "originalStartTime": {
          "dateTime": "2023-05-26T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000@google.com",
        "sequence": 1,
        "attendees": [
          {
            "email": "shreyas@securly.com",
            "displayName": "Shreyas Moghe",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "gaurav@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "amit.shirke@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish.temurnikar@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "bikash.singh@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "sagar.satpute@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "riddhish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "pravin@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "accepted"
          }
        ],
        "hangoutLink": "https://meet.google.com/xig-suji-dpt",
        "conferenceData": {
          "entryPoints": [
            {
              "entryPointType": "video",
              "uri": "https://meet.google.com/xig-suji-dpt",
              "label": "meet.google.com/xig-suji-dpt"
            },
            {
              "entryPointType": "more",
              "uri": "https://tel.meet/xig-suji-dpt?pin=1189638423295",
              "pin": "1189638423295"
            },
            {
              "regionCode": "US",
              "entryPointType": "phone",
              "uri": "tel:+1-402-284-0095",
              "label": "+1 402-284-0095",
              "pin": "314288338"
            }
          ],
          "conferenceSolution": {
            "key": {
              "type": "hangoutsMeet"
            },
            "name": "Google Meet",
            "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
          },
          "conferenceId": "xig-suji-dpt"
        },
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3363432431538000\"",
        "id": "2k3pp8fofhl4vh9voi98pl9rut_20230529T050000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MmszcHA4Zm9maGw0dmg5dm9pOThwbDlydXRfMjAyMzA1MjlUMDUwMDAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2023-03-20T04:59:52.000Z",
        "updated": "2023-04-17T07:23:35.769Z",
        "summary": "daily scrum",
        "creator": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "organizer": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "start": {
          "dateTime": "2023-05-29T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-29T10:45:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000",
        "originalStartTime": {
          "dateTime": "2023-05-29T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000@google.com",
        "sequence": 1,
        "attendees": [
          {
            "email": "shreyas@securly.com",
            "displayName": "Shreyas Moghe",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "gaurav@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "amit.shirke@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish.temurnikar@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "bikash.singh@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "sagar.satpute@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "riddhish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "pravin@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "accepted"
          }
        ],
        "hangoutLink": "https://meet.google.com/xig-suji-dpt",
        "conferenceData": {
          "entryPoints": [
            {
              "entryPointType": "video",
              "uri": "https://meet.google.com/xig-suji-dpt",
              "label": "meet.google.com/xig-suji-dpt"
            },
            {
              "entryPointType": "more",
              "uri": "https://tel.meet/xig-suji-dpt?pin=1189638423295",
              "pin": "1189638423295"
            },
            {
              "regionCode": "US",
              "entryPointType": "phone",
              "uri": "tel:+1-402-284-0095",
              "label": "+1 402-284-0095",
              "pin": "314288338"
            }
          ],
          "conferenceSolution": {
            "key": {
              "type": "hangoutsMeet"
            },
            "name": "Google Meet",
            "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
          },
          "conferenceId": "xig-suji-dpt"
        },
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3369025798184000\"",
        "id": "6nshll78ct99nm6lg0tlavaio4_20230529T054500Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Nm5zaGxsNzhjdDk5bm02bGcwdGxhdmFpbzRfMjAyMzA1MjlUMDU0NTAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2022-12-16T10:49:52.000Z",
        "updated": "2023-05-19T16:14:59.092Z",
        "summary": "Work anniversary feedback reminder",
        "location": "https://forms.gle/MJz8o1posFXwD8PB7 ",
        "creator": {
          "email": "manasi@securly.com",
          "displayName": "Manasi Kulkarni"
        },
        "organizer": {
          "email": "manasi@securly.com",
          "displayName": "Manasi Kulkarni"
        },
        "start": {
          "dateTime": "2023-05-29T11:15:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-29T11:15:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "6nshll78ct99nm6lg0tlavaio4",
        "originalStartTime": {
          "dateTime": "2023-05-29T11:15:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "6nshll78ct99nm6lg0tlavaio4@google.com",
        "sequence": 0,
        "attendees": [
          {
            "email": "manasi@securly.com",
            "displayName": "Manasi Kulkarni",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "pune@securly.com",
            "displayName": "Pune Office",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "needsAction"
          }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3363432431538000\"",
        "id": "2k3pp8fofhl4vh9voi98pl9rut_20230530T050000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MmszcHA4Zm9maGw0dmg5dm9pOThwbDlydXRfMjAyMzA1MzBUMDUwMDAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2023-03-20T04:59:52.000Z",
        "updated": "2023-04-17T07:23:35.769Z",
        "summary": "daily scrum",
        "creator": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "organizer": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "start": {
          "dateTime": "2023-05-30T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-30T10:45:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000",
        "originalStartTime": {
          "dateTime": "2023-05-30T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000@google.com",
        "sequence": 1,
        "attendees": [
          {
            "email": "shreyas@securly.com",
            "displayName": "Shreyas Moghe",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "gaurav@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "amit.shirke@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish.temurnikar@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "bikash.singh@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "sagar.satpute@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "riddhish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "pravin@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "accepted"
          }
        ],
        "hangoutLink": "https://meet.google.com/xig-suji-dpt",
        "conferenceData": {
          "entryPoints": [
            {
              "entryPointType": "video",
              "uri": "https://meet.google.com/xig-suji-dpt",
              "label": "meet.google.com/xig-suji-dpt"
            },
            {
              "entryPointType": "more",
              "uri": "https://tel.meet/xig-suji-dpt?pin=1189638423295",
              "pin": "1189638423295"
            },
            {
              "regionCode": "US",
              "entryPointType": "phone",
              "uri": "tel:+1-402-284-0095",
              "label": "+1 402-284-0095",
              "pin": "314288338"
            }
          ],
          "conferenceSolution": {
            "key": {
              "type": "hangoutsMeet"
            },
            "name": "Google Meet",
            "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
          },
          "conferenceId": "xig-suji-dpt"
        },
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      },
      {
        "kind": "calendar#event",
        "etag": "\"3363432431538000\"",
        "id": "2k3pp8fofhl4vh9voi98pl9rut_20230531T050000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MmszcHA4Zm9maGw0dmg5dm9pOThwbDlydXRfMjAyMzA1MzFUMDUwMDAwWiBwcmF0aWsudGl3YXJpQHNlY3VybHkuY29t",
        "created": "2023-03-20T04:59:52.000Z",
        "updated": "2023-04-17T07:23:35.769Z",
        "summary": "daily scrum",
        "creator": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "organizer": {
          "email": "shreyas@securly.com",
          "displayName": "Shreyas Moghe"
        },
        "start": {
          "dateTime": "2023-05-31T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "end": {
          "dateTime": "2023-05-31T10:45:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "recurringEventId": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000",
        "originalStartTime": {
          "dateTime": "2023-05-31T10:30:00+05:30",
          "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "2k3pp8fofhl4vh9voi98pl9rut_R20230417T050000@google.com",
        "sequence": 1,
        "attendees": [
          {
            "email": "shreyas@securly.com",
            "displayName": "Shreyas Moghe",
            "organizer": true,
            "responseStatus": "accepted"
          },
          {
            "email": "gaurav@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "amit.shirke@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish.temurnikar@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "bikash.singh@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "sagar.satpute@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "riddhish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "ashish@securly.com",
            "responseStatus": "accepted"
          },
          {
            "email": "pravin@securly.com",
            "responseStatus": "needsAction"
          },
          {
            "email": "pratik.tiwari@securly.com",
            "self": true,
            "responseStatus": "accepted"
          }
        ],
        "hangoutLink": "https://meet.google.com/xig-suji-dpt",
        "conferenceData": {
          "entryPoints": [
            {
              "entryPointType": "video",
              "uri": "https://meet.google.com/xig-suji-dpt",
              "label": "meet.google.com/xig-suji-dpt"
            },
            {
              "entryPointType": "more",
              "uri": "https://tel.meet/xig-suji-dpt?pin=1189638423295",
              "pin": "1189638423295"
            },
            {
              "regionCode": "US",
              "entryPointType": "phone",
              "uri": "tel:+1-402-284-0095",
              "label": "+1 402-284-0095",
              "pin": "314288338"
            }
          ],
          "conferenceSolution": {
            "key": {
              "type": "hangoutsMeet"
            },
            "name": "Google Meet",
            "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
          },
          "conferenceId": "xig-suji-dpt"
        },
        "reminders": {
          "useDefault": true
        },
        "eventType": "default"
      }
    ]
  }
}
